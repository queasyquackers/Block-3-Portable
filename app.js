document.addEventListener('DOMContentLoaded', () => {


    // --- Helper Functions ---
    function groupTests(tests) {
        const grouped = {};
        tests.forEach(test => {
            const weekMatch = test.name.match(/^(\d+)-(.+)/);
            const categoryMatch = test.name.match(/^([^-]+)-(.+)/);

            let groupKey = "General";
            let displayName = test.name;

            if (weekMatch) {
                const weekNum = weekMatch[1].trim();
                displayName = weekMatch[2].trim();
                groupKey = `Week ${weekNum}`;
            } else if (categoryMatch) {
                groupKey = categoryMatch[1].trim();
                displayName = categoryMatch[2].trim();
            }

            if (!grouped[groupKey]) {
                grouped[groupKey] = [];
            }
            grouped[groupKey].push({
                ...test,
                displayName: displayName
            });
        });
        return grouped;
    }

    // --- State Management ---
    const testStates = {};
    let currentTestName = '';
    let performanceChart = null;
    let isFlashcardMode = false;
    let isTimeAttackMode = false;
    const TIME_ATTACK_DURATION = 480; // 8 minutes in seconds

    const getCurrentTestState = () => {
        if (!currentTestName || !testStates[currentTestName]) return null;
        return testStates[currentTestName];
    };

    const getEl = (id) => document.getElementById(id);

    // --- Helper for Clinical Pearls ---
    const renderClinicalPearl = (text) => {
        if (!text) return '';

        // Simple Markdown parsing: **bold** -> <strong>bold</strong>
        // Also supports __bold__
        const parsedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/__(.*?)__/g, '<strong>$1</strong>');

        return `
            <div class="mt-6 mb-4 overflow-hidden rounded-xl bg-white dark:bg-[#073642] border border-[#d3d0c8] dark:border-orange-500/30 shadow-sm dark:shadow-[0_2px_8px_-1px_rgba(249,115,22,0.1)] group relative transition-colors duration-300">
                <div class="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-400 to-orange-600"></div>
                <div class="p-5 flex gap-4">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 rounded-full bg-[#fdf6e3] dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-500 shadow-sm border border-[#d3d0c8] dark:border-orange-500/20">
                            <!-- Gem/Diamond Icon -->
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1.5">
                            <span class="text-xs font-bold tracking-wider text-orange-600 dark:text-orange-400 uppercase bg-[#fdf6e3] dark:bg-orange-500/10 px-2 py-0.5 rounded-full border border-[#d3d0c8] dark:border-orange-500/20">High Yield</span>
                            <h4 class="font-bold text-gray-900 dark:text-gray-100 text-sm">Clinical Pearl</h4>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed font-medium">
                            ${parsedText}
                        </p>
                    </div>
                </div>
            </div>
        `;
    };

    // --- Pearlbook Logic ---
    const openPearlbook = () => {
        const state = getCurrentTestState();
        if (!state || !state.questions) return;

        const container = getEl('pearlbook-content');
        container.innerHTML = '';

        // Group by Category
        const pearlsByCategory = {};
        state.questions.forEach(q => {
            if (q.clinicalPearl) {
                const cat = q.category || "General";
                if (!pearlsByCategory[cat]) pearlsByCategory[cat] = [];
                pearlsByCategory[cat].push(q.clinicalPearl);
            }
        });

        if (Object.keys(pearlsByCategory).length === 0) {
            container.innerHTML = `<div class="text-center text-secondary py-10">No Clinical Pearls found for this exam section.</div>`;
        } else {
            Object.entries(pearlsByCategory).forEach(([category, pearls]) => {
                const section = document.createElement('div');
                section.className = "mb-8";
                section.innerHTML = `
                    <h3 class="pearl-category-header text-lg font-bold text-accent mb-4 sticky bg-white/90 dark:bg-slate-900/90 py-2 px-1">${category}</h3>
                    <div class="space-y-4">
                        ${pearls.map(pearl => renderClinicalPearl(pearl)).join('')}
                    </div>
                `;
                container.appendChild(section);
            });
        }

        getEl('pearlbook-modal').classList.remove('hidden');
    };

    // Close Pearlbook
    getEl('close-pearlbook-btn')?.addEventListener('click', () => {
        getEl('pearlbook-modal').classList.add('hidden');
    });
    getEl('pearlbook-backdrop')?.addEventListener('click', () => {
        getEl('pearlbook-modal').classList.add('hidden');
    });
    getEl('pearlbook-btn')?.addEventListener('click', openPearlbook);


    // --- Global Review Logic ---
    const GLOBAL_REVIEW_KEY = 'medStudy_globalIncorrects';

    const getGlobalIncorrects = () => {
        const stored = localStorage.getItem(GLOBAL_REVIEW_KEY);
        return stored ? JSON.parse(stored) : []; // Array of "TestName|QuestionID"
    };

    const updateGlobalIncorrect = (testName, questionId, isCorrect) => {
        // We need questionId (or index if ID missing) to track specifics
        // Assuming Question objects have unique IDs or we use index as fallback if stable
        // For robustness, we'll try to use Question ID, fallback to Question Text Hash? 
        // Let's rely on Question ID if available, else TestName_Index.

        const qKey = `${testName}|${questionId}`;
        let list = getGlobalIncorrects();
        const exists = list.includes(qKey);

        if (!isCorrect && !exists) {
            list.push(qKey);
            localStorage.setItem(GLOBAL_REVIEW_KEY, JSON.stringify(list));
            updateGlobalReviewButton();
        } else if (isCorrect && exists) {
            list = list.filter(id => id !== qKey);
            localStorage.setItem(GLOBAL_REVIEW_KEY, JSON.stringify(list));
            updateGlobalReviewButton();
        }
    };

    const updateGlobalReviewButton = () => {
        const list = getGlobalIncorrects();
        const btn = getEl('global-review-btn-sidebar');
        const countSpan = getEl('global-review-count');

        if (btn) {
            if (list.length > 0) {
                btn.classList.remove('hidden');
                btn.classList.add('flex'); // Ensure flex display
                if (countSpan) countSpan.textContent = list.length;
            } else {
                btn.classList.add('hidden');
                btn.classList.remove('flex');
            }
        }
    };

    const startGlobalReview = () => {
        const list = getGlobalIncorrects();
        if (list.length === 0) {
            alert("No incorrect questions tracked yet! Great job!");
            return;
        }

        let reviewQuestions = [];

        // Find the actual question objects
        list.forEach(key => {
            const [tName, qId] = key.split('|');
            const testObj = testsToLoad.find(t => t.name === tName);
            if (testObj && testObj.data) {
                const q = testObj.data.find(item => String(item.id) === qId);
                if (q) {
                    reviewQuestions.push({
                        ...q,
                        category: `${q.category} (Review: ${tName})`,
                        originalTestName: tName // Store source to update correctness later
                    });
                }
            }
        });

        if (reviewQuestions.length === 0) {
            // IDs might be stale if content changed
            alert("Could not load saved questions (data mismatch). Clearing list.");
            localStorage.setItem(GLOBAL_REVIEW_KEY, JSON.stringify([]));
            updateGlobalReviewButton();
            return;
        }

        // Create Session
        const reviewTest = {
            name: "Global Review",
            displayName: `Global Review (${reviewQuestions.length})`,
            data: reviewQuestions
        };

        // --- FIX: ALWAYS FRESH START ---
        // Clear any previous progress for Global Review to ensure we don't load stale state
        const PROGRESS_KEY = `examProgress_Global Review`;
        localStorage.removeItem(PROGRESS_KEY);
        if (testStates["Global Review"]) delete testStates["Global Review"];

        loadTest(reviewTest);
    };

    getEl('global-review-btn-sidebar')?.addEventListener('click', startGlobalReview);


    // --- Theme Handling ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    const darkModeToggle = getEl('dark-mode-toggle');
    const lightIcon = getEl('theme-icon-light');
    const darkIcon = getEl('theme-icon-dark');

    const updateThemeIcons = () => {
        if (document.body.classList.contains('dark-mode')) {
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        } else {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        }
    };

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateThemeIcons();
    });



    // --- Core Logic ---


    const generateSummary = (testName) => {
        const state = testStates[testName];
        if (!state) return;

        const score = state.userAnswers.filter(a => a.isCorrect).length;
        const totalQuestions = state.questions.length;
        const percentage = totalQuestions > 0 ? (score / totalQuestions * 100).toFixed(1) : 0;
        getEl('final-score').textContent = `${score} / ${totalQuestions}`;
        getEl('final-percentage').textContent = `${percentage}%`;
        const correctCount = score;
        const incorrectCount = totalQuestions - score;
        if (performanceChart) performanceChart.destroy();
        const ctx = getEl('performance-chart').getContext('2d');
        // Theme Colors: Correct (Green-500: #22c55e), Incorrect (Red-500: #ef4444)
        performanceChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    data: [correctCount, incorrectCount],
                    backgroundColor: ['#22c55e', '#ef4444'],
                    borderColor: getComputedStyle(document.body).getPropertyValue('--bg-card').trim(),
                    borderWidth: 5,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                cutout: '75%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        padding: 12,
                        cornerRadius: 8,
                        callbacks: { label: (c) => ` ${c.label}: ${c.raw} (${((c.raw / totalQuestions) * 100).toFixed(0)}%)` }
                    }
                }
            }
        });

        const categoryStats = {};
        state.questions.forEach((q, index) => {
            if (!categoryStats[q.category]) categoryStats[q.category] = { correct: 0, total: 0 };
            if (state.userAnswers[index].isSubmitted) {
                categoryStats[q.category].total++;
                if (state.userAnswers[index].isCorrect) categoryStats[q.category].correct++;
            }
        });
        state.currentSummaryStats = categoryStats;

        const perfArray = Object.entries(categoryStats).map(([name, stats]) => ({
            name,
            score: stats.total > 0 ? (stats.correct / stats.total) : 0,
            stats: `${stats.correct} / ${stats.total}`
        })).sort((a, b) => a.score - b.score);

        const overviewContainer = getEl('performance-overview');
        overviewContainer.innerHTML = '';

        const weakest = perfArray.slice(0, 3);
        const strongest = perfArray.length > 3 ? perfArray.slice(-3).reverse() : [];

        let html = '';
        if (weakest.length > 0) {
            html += `<h4 class="font-semibold text-red-500">Areas for Review</h4>`;
            weakest.forEach(item => {
                html += `<p class="text-sm text-secondary">${item.name} - ${item.stats} (${(item.score * 100).toFixed(0)}%)</p>`;
            });
        }
        if (strongest.length > 0) {
            html += `<h4 class="font-semibold text-green-500 mt-4">Strongest Areas</h4>`;
            strongest.forEach(item => {
                html += `<p class="text-sm text-secondary">${item.name} - ${item.stats} (${(item.score * 100).toFixed(0)}%)</p>`;
            });
        }
        overviewContainer.innerHTML = html;
        overviewContainer.innerHTML = html;
    };

    function switchToTest(testName) {
        if (currentTestName && testStates[currentTestName]) {
            pauseTimer(); // Stop previous timer to prevent overlap
            saveState();
        }

        currentTestName = testName;
        const state = testStates[testName];
        if (!state) return;

        const displayName = testName.replace(/^(\d+)-/, '').trim();
        getEl('exam-title').textContent = `Practice Exam: ${displayName}`;

        const selectorBtns = getEl('test-selector-nav').querySelectorAll('.test-item-btn');
        selectorBtns.forEach(btn => {
            btn.classList.toggle('test-selector-btn-active', btn.dataset.name === testName);
            btn.classList.toggle('test-selector-btn-inactive', btn.dataset.name !== testName);
        });

        const weekToggles = getEl('test-selector-nav').querySelectorAll('.week-toggle-btn');
        weekToggles.forEach(toggle => {
            const panel = toggle.nextElementSibling;
            if (panel && panel.querySelector('.test-selector-btn-active')) {
                toggle.classList.add('test-selector-btn-active');
                toggle.classList.remove('test-selector-btn-inactive');
            } else {
                toggle.classList.remove('test-selector-btn-active');
                toggle.classList.add('test-selector-btn-inactive');
            }
        });

        getEl('timer-display').textContent = formatTime(Math.floor(state.timer.elapsedTime / 1000));

        getEl('finish-test-btn').disabled = state.examFinished;
        getEl('flag-question-btn').disabled = state.examFinished;
        getEl('timer-start-btn').disabled = state.examFinished;
        getEl('timer-pause-btn').disabled = state.examFinished;

        const summaryTab = getEl('tab-summary');
        summaryTab.disabled = !state.examFinished;
        if (state.examFinished) {
            summaryTab.classList.remove('disabled:opacity-50', 'disabled:cursor-not-allowed');
        } else {
            summaryTab.classList.add('disabled:opacity-50', 'disabled:cursor-not-allowed');
        }

        if (state.examFinished) {
            getEl('tab-summary').click();
            generateSummary(testName);
        } else {
            getEl('tab-test').click();
        }

        if (state.timer.isRunning) {
            getEl('timer-start-btn').classList.add('hidden');
            getEl('timer-pause-btn').classList.remove('hidden');
        } else {
            getEl('timer-start-btn').classList.remove('hidden');
            getEl('timer-pause-btn').classList.add('hidden');
            getEl('timer-start-btn').textContent = state.timer.elapsedTime > 0 ? 'Resume' : 'Start';
        }

        renderSidebar();
        displayQuestion();
    }

    function loadTest(testObject) {
        // If in Flashcard mode, exit it first to restore UI
        if (isFlashcardMode) {
            toggleFlashcardMode(false);
        }

        if (!testStates[testObject.name]) {
            testStates[testObject.name] = {
                questions: testObject.data,
                currentQuestionIndex: 0,
                userAnswers: [],
                flaggedQuestions: new Set(),
                timer: { interval: null, startTime: 0, elapsedTime: 0, isRunning: false, isCountdown: false, duration: 0 },
                examFinished: false,
                currentSummaryStats: {}
            };

            const LOCAL_STORAGE_KEY = `examProgress_${testObject.name}`;
            const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                const state = testStates[testObject.name];
                state.currentQuestionIndex = parsedState.currentQuestionIndex;
                state.userAnswers = parsedState.userAnswers.map(a => ({ ...a, strikedOutIndices: new Set(a.strikedOutIndices) }));
                state.flaggedQuestions = new Set(parsedState.flaggedQuestions);
                state.timer.elapsedTime = parsedState.timer.elapsedTime;
                // Restore finished state
                if (parsedState.examFinished) {
                    state.examFinished = true;
                }

                // VALIDATION: Ensure mismatch in question count triggers reset (e.g. after content update)
                if (state.userAnswers.length !== state.questions.length) {
                    console.warn("State mismatch detected (Question Count changed). Resetting progress.");
                    state.userAnswers = Array(state.questions.length).fill(null).map(() => ({
                        selectedIndex: null,
                        isSubmitted: false,
                        isCorrect: false,
                        strikedOutIndices: new Set()
                    }));
                    state.flaggedQuestions = new Set();
                    state.currentQuestionIndex = 0;
                    state.examFinished = false;
                    localStorage.removeItem(LOCAL_STORAGE_KEY);
                }
            } else {
                const state = testStates[testObject.name];
                state.userAnswers = Array(state.questions.length).fill(null).map(() => ({
                    selectedIndex: null,
                    isSubmitted: false,
                    isCorrect: false,
                    strikedOutIndices: new Set()
                }));
            }
        }

        switchToTest(testObject.name);
    }

    function startMasterReview() {
        // 1. Collect all questions
        let allQuestions = [];
        testsToLoad.forEach(test => {
            if (test.data && Array.isArray(test.data)) {
                // Add source info to question for context
                const questionsWithContext = test.data.map(q => ({
                    ...q,
                    category: `${q.category} (${test.name})`
                }));
                allQuestions = allQuestions.concat(questionsWithContext);
            }
        });

        if (allQuestions.length === 0) {
            alert("No questions found to generate a review.");
            return;
        }

        // 2. Shuffle
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }

        // 3. Select 20
        const selectedQuestions = allQuestions.slice(0, 20);

        // 4. Create Test Object
        const masterTest = {
            name: "Master Review",
            displayName: "Master Review (20 Random)",
            data: selectedQuestions
        };

        // 5. Load it
        // We need to manually add it to testStates if not present, but loadTest handles that.
        // We might want to clear previous master review progress
        const LOCAL_STORAGE_KEY = `examProgress_Master Review`;
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        if (testStates["Master Review"]) delete testStates["Master Review"];

        loadTest(masterTest);
    }

    function createTestSelector() {
        const navContainer = getEl('test-selector-nav');
        navContainer.innerHTML = '';

        const grouped = groupTests(testsToLoad);

        const groupKeys = Object.keys(grouped).sort((a, b) => {
            if (a === "General") return 1;
            if (b === "General") return -1;
            return a.localeCompare(b, undefined, { numeric: true });
        });

        groupKeys.forEach(groupName => {
            const groupContainer = document.createElement('div');
            groupContainer.className = 'relative inline-block text-left w-full sm:w-auto';

            const weekButton = document.createElement('button');
            weekButton.textContent = groupName + ' ▼';
            weekButton.className = 'week-toggle-btn test-selector-btn test-selector-btn-inactive w-full sm:w-auto text-left sm:text-center justify-between sm:inline-flex items-center';

            const dropdownPanel = document.createElement('div');
            dropdownPanel.className = 'week-dropdown-panel';
            dropdownPanel.style.display = 'none';

            const testsInGroup = grouped[groupName];
            testsInGroup.forEach(testObj => {
                const button = document.createElement('button');
                button.textContent = testObj.displayName;
                button.dataset.name = testObj.name;
                button.className = 'test-selector-btn test-selector-btn-inactive test-item-btn';

                const originalTestObj = testsToLoad.find(t => t.name === testObj.name);
                button.onclick = () => {
                    loadTest(originalTestObj);
                    document.querySelectorAll('.week-dropdown-panel').forEach(p => p.style.display = 'none');
                };
                dropdownPanel.appendChild(button);
            });

            weekButton.onclick = (e) => {
                document.querySelectorAll('.week-dropdown-panel').forEach(panel => {
                    if (panel !== dropdownPanel) {
                        panel.style.display = 'none';
                    }
                });
                const isHidden = dropdownPanel.style.display === 'none';
                dropdownPanel.style.display = isHidden ? 'block' : 'none';
            };

            groupContainer.appendChild(weekButton);
            groupContainer.appendChild(dropdownPanel);
            navContainer.appendChild(groupContainer);
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.week-toggle-btn')) {
                document.querySelectorAll('.week-dropdown-panel').forEach(panel => {
                    panel.style.display = 'none';
                });
            }
        });
    }

    const finishTest = () => {
        hideModal();
        const state = getCurrentTestState();
        if (!state) return;

        state.examFinished = true;
        pauseTimer();

        // Grade all answers
        state.userAnswers.forEach((ans, index) => {
            ans.isSubmitted = true;
            if (ans.selectedIndex !== null) {
                ans.isCorrect = ans.selectedIndex === state.questions[index].correctAnswerIndex;
            } else {
                ans.isCorrect = false;
            }
        });

        let score = 0;
        state.userAnswers.forEach(ans => { if (ans.isCorrect) score++ });

        getEl('finish-test-btn').disabled = true;
        getEl('flag-question-btn').disabled = true;
        getEl('timer-start-btn').disabled = true;
        getEl('timer-pause-btn').disabled = true;

        const summaryTab = getEl('tab-summary');
        summaryTab.disabled = false;
        summaryTab.classList.remove('disabled:opacity-50', 'disabled:cursor-not-allowed');
        summaryTab.click();

        // --- SESSION PERSISTENCE: Save Finished State instead of deleting ---
        saveState();

        generateSummary(currentTestName);

        // Update Review for Incorrect
        const navButtons = getEl('question-grid').querySelectorAll('button');
        navButtons.forEach((btn, index) => {
            btn.classList.remove('q-grid-btn-answered', 'q-grid-btn-flagged', 'q-grid-btn-current');
            if (state.userAnswers[index].isCorrect) {
                btn.classList.add('q-grid-btn-correct');
                updateGlobalIncorrect(currentTestName, state.questions[index].id, true);
            } else {
                btn.classList.add('q-grid-btn-incorrect');
                updateGlobalIncorrect(currentTestName, state.questions[index].id, false);
            }
        });

        // Update review button visibility immediately
        updateGlobalReviewButton();
    };

    const handleTabClick = (e) => {
        const target = e.currentTarget;
        if (target.disabled) return;
        const testTab = getEl('tab-test');
        const summaryTab = getEl('tab-summary');
        const testView = getEl('test-view');
        const summaryView = getEl('summary-view');
        testTab.classList.remove('tab-active');
        testTab.classList.add('text-gray-500', 'border-transparent');
        summaryTab.classList.remove('tab-active');
        summaryTab.classList.add('text-gray-500', 'border-transparent');
        if (target.id === 'tab-test') {
            summaryView.classList.add('hidden');
            testView.classList.remove('hidden');
            testTab.classList.add('tab-active');
            testTab.classList.remove('text-gray-500', 'border-transparent');
        } else {
            testView.classList.add('hidden');
            summaryView.classList.remove('hidden');
            summaryTab.classList.add('tab-active');
            summaryTab.classList.remove('text-gray-500', 'border-transparent');
            getEl('detailed-review-view').classList.add('hidden');
            getEl('summary-dashboard').classList.remove('hidden');
        }
    };

    const handleSubmit = () => {
        const state = getCurrentTestState();
        if (!state || state.examFinished) return;
        const answerState = state.userAnswers[state.currentQuestionIndex];
        if (answerState.selectedIndex === null) {
            alert('Please select an answer before submitting.');
            return;
        }
        if (answerState.isSubmitted) return;

        answerState.isSubmitted = true;
        answerState.isCorrect = answerState.selectedIndex === state.questions[state.currentQuestionIndex].correctAnswerIndex;
        answerState.strikedOutIndices.clear();

        // Update Global Review tracking on immediate submit
        // Note: For "Global Review" session, we need to map back to original test if possible
        let sourceTestName = state.questions[state.currentQuestionIndex].originalTestName || currentTestName;
        // If we are in "Global Review" mode, question objects have .originalTestName attached in startGlobalReview

        updateGlobalIncorrect(sourceTestName, state.questions[state.currentQuestionIndex].id, answerState.isCorrect);

        displayQuestion();
        saveState();
    };

    const displayQuestion = () => {
        const state = getCurrentTestState();
        if (!state || state.questions.length === 0) return;

        const question = state.questions[state.currentQuestionIndex];
        const answerState = state.userAnswers[state.currentQuestionIndex];
        const questionContainer = getEl('question-container');
        const navigationContainer = getEl('navigation-container');

        // Get the slide containers
        const slideContainer = getEl('slide-display-container');
        const slidePlaceholder = getEl('slide-image-placeholder');

        questionContainer.innerHTML = '';
        navigationContainer.innerHTML = '';
        // Reset slide display
        slideContainer.classList.add('hidden');
        slidePlaceholder.innerHTML = ''; // Clear placeholder content

        if (isFlashcardMode) {
            renderFlashcard();
            return;
        }

        getEl('question-counter').textContent = `Question ${state.currentQuestionIndex + 1} of ${state.questions.length}`;

        // Update Progress Bar
        const answeredCount = state.userAnswers.filter(a => a.isSubmitted).length;
        const progressPct = (answeredCount / state.questions.length) * 100;
        const progressBar = getEl('exam-progress-bar');
        if (progressBar) progressBar.style.width = `${progressPct}%`;

        // Update flag button
        if (state.flaggedQuestions.has(state.currentQuestionIndex)) {
            getEl('flag-btn-text').textContent = 'Unflag';
            getEl('flag-question-btn').classList.add('text-yellow-500');
        } else {
            getEl('flag-btn-text').textContent = 'Flag for Review';
            getEl('flag-question-btn').classList.remove('text-yellow-500');
        }

        const qText = document.createElement('p');
        qText.className = 'text-lg leading-relaxed mb-6 animate-slide-entry';
        qText.innerHTML = question.questionText;
        questionContainer.appendChild(qText);

        const optsContainer = document.createElement('div');
        optsContainer.className = 'space-y-3';
        question.options.forEach((opt, index) => {
            const wrapper = document.createElement('div');
            const btn = document.createElement('button');
            btn.className = 'w-full text-left p-4 rounded-lg option-btn';
            btn.dataset.index = index;
            btn.innerHTML = `<span class="font-bold mr-2">${String.fromCharCode(65 + index)}.</span> ${opt.text}`;
            if (answerState.strikedOutIndices.has(index)) btn.classList.add('option-strikethrough');
            const explanationEl = document.createElement('div');
            explanationEl.className = 'explanation';
            explanationEl.innerHTML = opt.explanation;

            if (answerState.isSubmitted || state.examFinished) {
                btn.disabled = true;
                explanationEl.style.display = 'block';
                btn.classList.remove('option-btn-selected');

                if (index === question.correctAnswerIndex) {
                    btn.classList.add('option-btn-correct');
                    explanationEl.classList.add('explanation-correct');
                }
                else {
                    explanationEl.classList.add('explanation-incorrect');
                    if (index === answerState.selectedIndex) {
                        btn.classList.add('option-btn-incorrect');
                    }
                }

            } else {
                if (answerState.selectedIndex === index) btn.classList.add('option-btn-selected');
            }
            wrapper.appendChild(btn);
            wrapper.appendChild(explanationEl);
            optsContainer.appendChild(wrapper);
        });
        questionContainer.appendChild(optsContainer);

        // --- CLINICAL PEARL (High-Yield Takeaway) ---
        if ((answerState.isSubmitted || state.examFinished) && question.clinicalPearl) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = renderClinicalPearl(question.clinicalPearl);
            if (tempDiv.firstElementChild) {
                questionContainer.appendChild(tempDiv.firstElementChild);
            }
        }

        // --- PDF REFERENCE LOGIC (NO IMAGE DISPLAY) ---
        // Works with both slideImagePath (legacy) and pdfPage (new) formats
        let shouldShowPDF = false;
        let lectureId = null;
        let pageNum = null;

        if (answerState.isSubmitted || state.examFinished) {
            // Option 1: New format with direct pdfPage
            if (question.pdfPage) {
                shouldShowPDF = true;
                // Extract lecture ID from test name (remove week prefix like "13-")
                lectureId = currentTestName.replace(/^(\d+-)/, '');
                pageNum = question.pdfPage;
                console.log("Direct PDF reference - Lecture:", lectureId, "Page:", pageNum);
            }
            // Option 2: Legacy format with slideImagePath
            else if (question.slideImagePath && question.slideImagePath !== "") {
                console.log("Checking PDF for:", question.slideImagePath);
                // Regex to extract lecture ID and page number from path
                const match = question.slideImagePath.match(/L(\d+(?:L\d+)*)(_slide_|_p_page-|_Ans_Page_)(\d+)/i);
                if (match) {
                    shouldShowPDF = true;
                    lectureId = `L${match[1]}`;
                    const separator = match[2];
                    pageNum = parseInt(match[3]);

                    // If it's an Answer Page (Practice Quiz), append _Quiz to the lectureId
                    if (separator === '_Ans_Page_') {
                        lectureId += '_Quiz';
                    }
                    console.log("Extracted from path:", lectureId, pageNum);
                }
            }

            // Display PDF button and context if we have a reference
            if (shouldShowPDF && lectureId && pageNum) {
                slideContainer.classList.remove('hidden');
                slidePlaceholder.innerHTML = '';

                const btnContainer = document.createElement('div');
                btnContainer.className = "flex flex-col gap-2";

                if (window.PDF_MAPPING && window.PDF_MAPPING[lectureId]) {
                    const mapping = window.PDF_MAPPING[lectureId];
                    const pdfPaths = Array.isArray(mapping) ? mapping : [mapping];

                    pdfPaths.forEach((pdfPath, index) => {
                        const label = pdfPaths.length > 1
                            ? `Open Lecture Source PDF ${index + 1} (Page ${pageNum})`
                            : `Open Lecture Source PDF (Page ${pageNum})`;
                        const pdfBtn = document.createElement('button');
                        pdfBtn.className = "w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm rounded-xl px-4 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]";
                        pdfBtn.innerHTML = `
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            ${label}
                        `;
                        pdfBtn.onclick = (e) => {
                            e.stopPropagation();
                            showPDF(pdfPath, pageNum);
                        };
                        btnContainer.appendChild(pdfBtn);
                    });
                } else {
                    // Show error if mapping not found
                    const errorBtn = document.createElement('button');
                    errorBtn.className = "w-full bg-gray-100 text-gray-400 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold flex items-center justify-center gap-2 cursor-not-allowed";
                    errorBtn.disabled = true;
                    errorBtn.innerHTML = `
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        PDF Source Not Found (${lectureId})
                    `;
                    btnContainer.appendChild(errorBtn);
                }
                slidePlaceholder.appendChild(btnContainer);

                // Slide context description removed as per user request (Clinical Pearl is sufficient).
            }
        }

        const prevBtn = document.createElement('button');
        prevBtn.textContent = '← Previous';
        prevBtn.className = 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white font-bold py-2 px-6 rounded disabled:opacity-50';
        if (state.currentQuestionIndex === 0) prevBtn.disabled = true;
        prevBtn.onclick = () => changeQuestion(-1);

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next →';
        nextBtn.className = 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white font-bold py-2 px-6 rounded disabled:opacity-50';
        if (state.currentQuestionIndex === state.questions.length - 1) nextBtn.disabled = true;
        nextBtn.onclick = () => changeQuestion(1);

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit Answer';
        submitBtn.className = 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded disabled:opacity-50 transition transform hover:scale-105';
        if (answerState.isSubmitted || state.examFinished) {
            submitBtn.classList.add('hidden');
        }
        submitBtn.onclick = handleSubmit;

        navigationContainer.appendChild(prevBtn);
        navigationContainer.appendChild(submitBtn);
        navigationContainer.appendChild(nextBtn);
        updateSidebarState();
    };

    const handleStrikeThrough = (e) => {
        e.preventDefault();
        const state = getCurrentTestState();
        if (!state || state.examFinished || state.userAnswers[state.currentQuestionIndex].isSubmitted) return;
        const targetButton = e.target.closest('button[data-index]');
        if (!targetButton) return;
        const index = parseInt(targetButton.dataset.index);
        const strikedOutSet = state.userAnswers[state.currentQuestionIndex].strikedOutIndices;
        if (strikedOutSet.has(index)) {
            strikedOutSet.delete(index);
        } else {
            strikedOutSet.add(index);
        }
        targetButton.classList.toggle('option-strikethrough');
        saveState();
    };

    const saveState = () => {
        const state = getCurrentTestState();
        // Allow saving 'finished' state so we can resume/view stats later
        if (!state) return;
        const LOCAL_STORAGE_KEY = `examProgress_${currentTestName}`;
        const stateToSave = {
            currentQuestionIndex: state.currentQuestionIndex,
            userAnswers: state.userAnswers.map(a => ({ ...a, strikedOutIndices: Array.from(a.strikedOutIndices) })),
            flaggedQuestions: Array.from(state.flaggedQuestions),
            timer: { elapsedTime: state.timer.elapsedTime + (state.timer.isRunning ? Date.now() - state.timer.startTime : 0) },
            // PERSIST finished state
            examFinished: state.examFinished || false
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    };

    const resetState = () => {
        if (confirm("Are you sure you want to reset all progress for this test? This cannot be undone.")) {
            pauseTimer();
            const LOCAL_STORAGE_KEY = `examProgress_${currentTestName}`;
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            const testObject = testsToLoad.find(t => t.name === currentTestName);
            delete testStates[currentTestName];
            loadTest(testObject);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const updateTimer = () => {
        const state = getCurrentTestState();
        if (!state) return;
        const now = Date.now();

        if (state.timer.isCountdown) {
            // Time Attack Logic
            const timePassed = (now - state.timer.startTime);
            const remaining = Math.max(0, state.timer.duration - timePassed);

            getEl('timer-display').textContent = formatTime(Math.floor(remaining / 1000));

            // Visual Urgency
            if (remaining < 60000) { // Less than 1 minute
                getEl('timer-display').classList.add('text-red-600', 'animate-pulse');
            } else {
                getEl('timer-display').classList.remove('text-red-600', 'animate-pulse');
            }

            if (remaining <= 0) {
                finishTest(); // Auto-finish
                alert("Time's Up! Pencils down!");
            }
        } else {
            // Standard Stopwatch Logic
            const totalElapsed = state.timer.elapsedTime + (now - state.timer.startTime);
            getEl('timer-display').textContent = formatTime(Math.floor(totalElapsed / 1000));
        }
    };

    const startTimer = () => {
        const state = getCurrentTestState();
        if (!state || state.examFinished || state.timer.isRunning) return;
        state.timer.isRunning = true;
        state.timer.startTime = Date.now();
        state.timer.interval = setInterval(updateTimer, 1000);
        getEl('timer-start-btn').textContent = 'Resume';
        getEl('timer-start-btn').classList.add('hidden');
        getEl('timer-pause-btn').classList.remove('hidden');
    };

    const pauseTimer = () => {
        const state = getCurrentTestState();
        if (!state || !state.timer.isRunning) return;
        state.timer.isRunning = false;
        clearInterval(state.timer.interval);
        state.timer.elapsedTime += Date.now() - state.timer.startTime;
        getEl('timer-start-btn').classList.remove('hidden');
        getEl('timer-pause-btn').classList.add('hidden');
        if (!state.examFinished) saveState();
    };

    const renderSidebar = () => {
        const state = getCurrentTestState();
        if (!state) return;
        const questionGrid = getEl('question-grid');
        questionGrid.innerHTML = '';
        state.questions.forEach((q, index) => {
            const btn = document.createElement('button');
            btn.className = 'q-grid-btn w-10 h-10 flex items-center justify-center rounded-full border border-default text-sm font-semibold';
            btn.textContent = index + 1;
            btn.dataset.index = index;
            questionGrid.appendChild(btn);
        });
        updateSidebarState();
    };

    const updateSidebarState = () => {
        const state = getCurrentTestState();
        if (!state) return;
        const buttons = getEl('question-grid').querySelectorAll('button');
        buttons.forEach((btn, index) => {
            // Reset all status classes
            btn.classList.remove('q-grid-btn-current', 'q-grid-btn-flagged', 'q-grid-btn-correct', 'q-grid-btn-incorrect');

            const answerState = state.userAnswers[index];
            const isFlagged = state.flaggedQuestions.has(index);

            // 1. Current Question (highest priority for border/focus, but color comes from status)
            if (index === state.currentQuestionIndex && !state.examFinished) {
                btn.classList.add('q-grid-btn-current');
            }

            // 2. Status Logic (Flagged > Correct/Incorrect > Default)
            if (isFlagged) {
                btn.classList.add('q-grid-btn-flagged');
            } else if (answerState.isSubmitted || state.examFinished) {
                if (answerState.isCorrect) {
                    btn.classList.add('q-grid-btn-correct');
                } else {
                    btn.classList.add('q-grid-btn-incorrect');
                }
            }
        });
    };

    const jumpToQuestion = (index) => {
        const state = getCurrentTestState();
        if (!state) return;
        if (state.examFinished && getEl('summary-view').classList.contains('hidden')) {
        } else if (state.examFinished) {
            getEl('tab-test').click();
        }
        state.currentQuestionIndex = index;
        displayQuestion();
        if (!state.examFinished) saveState();
    };

    const changeQuestion = (direction) => {
        const state = getCurrentTestState();
        if (!state) return;
        const newIndex = state.currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < state.questions.length) {
            jumpToQuestion(newIndex);
        }
    };

    const toggleFlag = () => {
        const state = getCurrentTestState();
        if (!state || state.examFinished) return;
        const index = state.currentQuestionIndex;

        if (state.flaggedQuestions.has(index)) {
            state.flaggedQuestions.delete(index);
        } else {
            state.flaggedQuestions.add(index);
        }

        // Optimized UI Update (No Re-render)
        const flagBtn = getEl('flag-question-btn');
        const flagText = getEl('flag-btn-text');

        if (flagBtn && flagText) {
            if (state.flaggedQuestions.has(index)) {
                flagText.textContent = 'Flagged';
                flagBtn.classList.add('text-yellow-500');
            } else {
                flagText.textContent = 'Flag for Review';
                flagBtn.classList.remove('text-yellow-500');
            }
        }

        // Update Sidebar Dot
        updateSidebarState(); // Ensure this updates immediately

        saveState();
    };

    const handleSelectAnswer = (e) => {
        // Find the closest button with a data-index attribute
        const selectedButton = e.target.closest('button[data-index]');
        // If no button found, or if it's not a data-index button, exit
        if (!selectedButton) return;

        const selectedIndex = parseInt(selectedButton.dataset.index);
        selectOption(selectedIndex);
    };

    const showModal = () => {
        const state = getCurrentTestState();
        if (!state) return;
        const unansweredCount = state.userAnswers.filter(a => !a.isSubmitted).length;
        const modalText = getEl('modal-text');
        if (unansweredCount > 0) {
            modalText.innerHTML = `<span class="font-bold">${unansweredCount} unanswered</span> questions. Are you sure you want to finish? They will be marked incorrect.`;
        } else {
            modalText.textContent = "Are you sure you want to finish and grade the exam?";
        }
        getEl('finish-modal').classList.remove('hidden');
    };

    const hideModal = () => getEl('finish-modal').classList.add('hidden');

    const showDetailedReview = (filterType) => {
        const state = getCurrentTestState();
        if (!state) return;
        getEl('summary-dashboard').classList.add('hidden');
        getEl('detailed-review-view').classList.remove('hidden');
        const container = getEl('detailed-questions-container');
        container.innerHTML = '';
        const questionsToReview = state.questions.filter((q, index) => {
            if (filterType === 'all') return state.userAnswers[index].isSubmitted;
            if (filterType === 'incorrect') return state.userAnswers[index].isSubmitted && !state.userAnswers[index].isCorrect;
            return false;
        });
        if (questionsToReview.length === 0 && filterType === 'incorrect') {
            container.innerHTML = `<div class="text-center p-8 subtle-card rounded-lg"><h3 class="text-xl font-bold text-green-500">Congratulations!</h3><p class="text-secondary mt-2">You have no incorrect answers to review.</p></div>`;
            return;
        }
        questionsToReview.forEach((q) => {
            const originalIndex = state.questions.findIndex(origQ => origQ.id === q.id);
            const userAnswer = state.userAnswers[originalIndex];
            const questionEl = document.createElement('div');
            questionEl.className = 'subtle-card p-6 border border-default rounded-lg mb-6';

            let optionsHtml = q.options.map((opt, optIndex) => {
                let indicators = '';
                if (optIndex === q.correctAnswerIndex) indicators += '<span class="ml-2 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">Correct</span>';
                if (userAnswer.selectedIndex === optIndex && !userAnswer.isCorrect) indicators += '<span class="ml-2 text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">Your Answer</span>';
                let optionClass = 'mt-2 p-3 border-l-4 card rounded-r-md';
                if (optIndex === q.correctAnswerIndex) optionClass += ' option-btn-correct';
                else if (userAnswer.selectedIndex === optIndex) optionClass += ' option-btn-incorrect';
                else optionClass += ' border-default';
                return `<div class="${optionClass}"><p>${String.fromCharCode(65 + optIndex)}. ${opt.text} ${indicators}</p><p class="text-sm text-secondary mt-1 pl-5"><em>Explanation:</em> ${opt.explanation}</p></div>`;
            }).join('');

            questionEl.innerHTML = `
                <p class="font-semibold text-secondary">Question ${originalIndex + 1} (${q.category})</p>
                <p class="font-bold text-lg mt-1">${q.questionText}</p>
                <div class="mt-4 space-y-2">${optionsHtml}</div>`;

            if (q.clinicalPearl) {
                questionEl.innerHTML += renderClinicalPearl(q.clinicalPearl);
            }

            // --- PDF / Visual Aid Logic ---
            let shouldShowPDF = false;
            let lectureId = null;
            let pageNum = null;

            // Option 1: New format with direct pdfPage
            if (q.pdfPage) {
                shouldShowPDF = true;
                lectureId = currentTestName.replace(/^(\d+-)/, '');
                pageNum = q.pdfPage;
            }
            // Option 2: Legacy format with slideImagePath
            else if (q.slideImagePath && q.slideImagePath !== "") {
                const match = q.slideImagePath.match(/L(\d+(?:L\d+)*)(_slide_|_p_page-|_Ans_Page_)(\d+)/i);
                if (match) {
                    shouldShowPDF = true;
                    lectureId = `L${match[1]}`;
                    const separator = match[2];
                    pageNum = parseInt(match[3]);
                    if (separator === '_Ans_Page_') lectureId += '_Quiz';
                }
            }

            if (shouldShowPDF && lectureId && pageNum) {
                const visualAidContainer = document.createElement('div');
                visualAidContainer.className = "mt-6 p-6 rounded-xl subtle-card border-l-4";
                visualAidContainer.style.borderColor = "var(--accent-color)";

                visualAidContainer.innerHTML = `
                    <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                            </path>
                        </svg>
                        Visual Aid
                    </h3>
                `;

                const btnContainer = document.createElement('div');
                btnContainer.className = "flex flex-col gap-2";

                if (window.PDF_MAPPING && window.PDF_MAPPING[lectureId]) {
                    const mapping = window.PDF_MAPPING[lectureId];
                    const pdfPaths = Array.isArray(mapping) ? mapping : [mapping];

                    pdfPaths.forEach((pdfPath, index) => {
                        const label = pdfPaths.length > 1
                            ? `Open Lecture Source PDF ${index + 1} (Page ${pageNum})`
                            : `Open Lecture Source PDF (Page ${pageNum})`;
                        const pdfBtn = document.createElement('button');
                        pdfBtn.className = "w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm rounded-xl px-4 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]";
                        pdfBtn.innerHTML = `
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            ${label}
                        `;
                        pdfBtn.onclick = (e) => {
                            e.stopPropagation();
                            showPDF(pdfPath, pageNum);
                        };
                        btnContainer.appendChild(pdfBtn);
                    });
                } else {
                    const errorBtn = document.createElement('button');
                    errorBtn.className = "w-full bg-gray-100 text-gray-400 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold flex items-center justify-center gap-2 cursor-not-allowed";
                    errorBtn.disabled = true;
                    errorBtn.innerHTML = `
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        PDF Source Not Found (${lectureId})
                    `;
                    btnContainer.appendChild(errorBtn);
                }
                visualAidContainer.appendChild(btnContainer);

                questionEl.appendChild(visualAidContainer);
            }

            container.appendChild(questionEl);
        });
    };

    // --- Event Listeners ---
    getEl('timer-start-btn').addEventListener('click', startTimer);
    getEl('timer-pause-btn').addEventListener('click', pauseTimer);
    getEl('question-grid').addEventListener('click', (e) => { if (e.target.matches('button[data-index]')) jumpToQuestion(parseInt(e.target.dataset.index)); });
    getEl('flag-question-btn').addEventListener('click', toggleFlag);
    getEl('question-container').addEventListener('click', handleSelectAnswer);
    getEl('question-container').addEventListener('contextmenu', handleStrikeThrough);
    getEl('finish-test-btn').addEventListener('click', showModal);
    getEl('reset-progress-btn').addEventListener('click', resetState);
    getEl('modal-cancel-btn').addEventListener('click', hideModal);
    getEl('modal-confirm-btn').addEventListener('click', finishTest);
    getEl('modal-backdrop').addEventListener('click', hideModal);
    getEl('view-all-btn').addEventListener('click', () => showDetailedReview('all'));
    getEl('view-incorrect-btn').addEventListener('click', () => showDetailedReview('incorrect'));
    getEl('back-to-summary-btn').addEventListener('click', () => { getEl('detailed-review-view').classList.add('hidden'); getEl('summary-dashboard').classList.remove('hidden'); });
    getEl('tab-test').addEventListener('click', handleTabClick);
    getEl('tab-summary').addEventListener('click', handleTabClick);

    const masterBtn = getEl('master-review-btn');
    if (masterBtn) {
        masterBtn.addEventListener('click', startMasterReview);
    }

    // --- Navigation Enhancements ---

    // 1. Hide Header on Scroll
    let lastScrollTop = 0;
    const navBar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navBar.style.transform = 'translateY(-150%)';
            navBar.style.transition = 'transform 0.3s ease-in-out';
        } else {
            // Scrolling up
            navBar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    const toggleTimer = () => {
        const state = getCurrentTestState();
        if (!state || state.examFinished) return;
        if (state.timer.isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    };

    // --- PDF VIEWER LOGIC ---
    let pdfDoc = null;
    let pageNumPending = null;
    let pdfCanvas = null;
    let pdfCtx = null;
    let isRendering = false;

    const renderPage = (num) => {
        isRendering = true;
        // Fetch page
        pdfDoc.getPage(num).then((page) => {
            // Calculate scale to fit entire page (contain)
            const container = document.getElementById('pdf-viewer-container').querySelector('.flex-grow');

            // Get available dimensions (subtract padding)
            const padding = 40; // 20px padding on each side/top-bottom
            const availableWidth = container.clientWidth - padding;
            const availableHeight = container.clientHeight - padding;

            const unscaledViewport = page.getViewport({ scale: 1 });

            const scaleX = availableWidth / unscaledViewport.width;
            const scaleY = availableHeight / unscaledViewport.height;

            // Use the smaller scale to ensure both width and height fit
            // Limit max scale to 1.5 to prevent small slides from becoming huge
            const scale = Math.min(scaleX, scaleY, 1.5);

            const viewport = page.getViewport({ scale: scale });

            // Set dimensions for high DPI if needed, but for now 1:1 mapping
            pdfCanvas.height = viewport.height;
            pdfCanvas.width = viewport.width;

            // CRITICAL: Explicitly set style width/height to match attributes
            // This prevents CSS from stretching the canvas and distorting aspect ratio
            pdfCanvas.style.width = `${viewport.width}px`;
            pdfCanvas.style.height = `${viewport.height}px`;

            const renderContext = {
                canvasContext: pdfCtx,
                viewport: viewport
            };
            const renderTask = page.render(renderContext);

            // Wait for render to finish
            renderTask.promise.then(() => {
                isRendering = false;
                if (pageNumPending !== null) {
                    // New page rendering is pending
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });

        // Update page counters
        document.getElementById('page_num').textContent = num;
    };

    const queueRenderPage = (num) => {
        if (isRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    };

    const onPrevPage = () => {
        if (pageNumPending !== null) return; // Wait until render finishes
        const currentPage = parseInt(document.getElementById('page_num').textContent);
        if (currentPage <= 1) {
            return;
        }
        queueRenderPage(currentPage - 1);
    };

    const onNextPage = () => {
        if (pageNumPending !== null) return; // Wait until render finishes
        const currentPage = parseInt(document.getElementById('page_num').textContent);
        if (currentPage >= pdfDoc.numPages) {
            return;
        }
        queueRenderPage(currentPage + 1);
    };

    const showPDF = (pdfPath, targetPageNum) => {
        // 1. Check if viewer already exists
        let viewerContainer = document.getElementById('pdf-viewer-container');

        if (!viewerContainer) {
            // Create container
            viewerContainer = document.createElement('div');
            viewerContainer.id = 'pdf-viewer-container';
            viewerContainer.className = "fixed inset-y-0 right-0 w-full md:w-1/2 bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 translate-x-full border-l border-default flex flex-col";

            // Header
            const header = document.createElement('div');
            header.className = "p-4 border-b border-default flex justify-between items-center bg-gray-50 dark:bg-slate-800";

            header.innerHTML = `
                <div class="flex items-center gap-4">
                    <h3 class="font-bold text-lg flex items-center gap-2">
                        <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                        Lecture Source
                    </h3>
                </div>
                <button id="close-pdf-btn" class="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            `;
            viewerContainer.appendChild(header);

            // Content Container
            const content = document.createElement('div');
            // Unified Scrollable Container
            content.id = "pdf-scroll-container";
            content.className = "flex-grow relative bg-gray-100 dark:bg-slate-900 overflow-y-auto overflow-x-hidden flex flex-col items-center p-4 gap-4";

            viewerContainer.appendChild(content);

            document.body.appendChild(viewerContainer);

            document.getElementById('close-pdf-btn').onclick = () => {
                viewerContainer.classList.add('translate-x-full');
            };
        }

        // 2. Load PDF
        const encodedPath = pdfPath.split('/').map(segment => encodeURIComponent(segment)).join('/');

        // --- UNIFIED SCROLLABLE CANVAS IMPLEMENTATION ---
        const container = document.getElementById('pdf-scroll-container');
        container.innerHTML = ''; // Clear previous PDF
        container.className = "flex-grow relative bg-gray-100 dark:bg-slate-900 overflow-y-auto overflow-x-hidden flex flex-col items-center p-4 gap-4";

        const loadingTask = pdfjsLib.getDocument(encodedPath);
        loadingTask.promise.then(async (pdf) => {
            pdfDoc = pdf;

            // OPTIMIZATION: Fetch target page FIRST to get dimensions and render it immediately
            const targetPage = await pdf.getPage(targetPageNum);

            // Calculate scale based on target page
            const padding = 32;
            const containerWidth = container.clientWidth - padding;
            const unscaledViewport = targetPage.getViewport({ scale: 1 });
            const scale = containerWidth / unscaledViewport.width;
            const viewport = targetPage.getViewport({ scale: scale });

            // Create placeholders for ALL pages immediately
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const canvas = document.createElement('canvas');
                canvas.id = `pdf-page-${pageNum}`;
                canvas.className = "shadow-lg bg-white mb-4";

                // Set dimensions immediately
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvas.style.width = `${viewport.width}px`;
                canvas.style.height = `${viewport.height}px`;

                container.appendChild(canvas);
            }

            // SNAP TO SLIDE IMMEDIATELY
            const targetCanvas = document.getElementById(`pdf-page-${targetPageNum}`);
            if (targetCanvas) {
                targetCanvas.scrollIntoView({ behavior: 'auto', block: 'start' });
            }

            // Render Target Page NOW
            const ctx = targetCanvas.getContext('2d');
            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            await targetPage.render(renderContext).promise;

            // Render REST of the pages in background
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                if (pageNum === targetPageNum) continue; // Already done

                pdf.getPage(pageNum).then(page => {
                    const canvas = document.getElementById(`pdf-page-${pageNum}`);
                    const ctx = canvas.getContext('2d');

                    const localViewport = page.getViewport({ scale: scale });

                    if (canvas.width !== localViewport.width || canvas.height !== localViewport.height) {
                        canvas.width = localViewport.width;
                        canvas.height = localViewport.height;
                        canvas.style.width = `${localViewport.width}px`;
                        canvas.style.height = `${localViewport.height}px`;
                    }

                    const renderContext = {
                        canvasContext: ctx,
                        viewport: localViewport
                    };
                    page.render(renderContext);
                });
            }

        }, (reason) => {
            console.warn('PDF.js load failed. Falling back to iframe.', reason);
            container.innerHTML = `<iframe id="pdf-frame" class="w-full h-full border-none" src="${encodedPath}#page=${targetPageNum}"></iframe>`;
            container.classList.remove('flex', 'flex-col', 'items-center', 'gap-4');
            container.classList.add('block');
        });

        // Open panel
        setTimeout(() => {
            viewerContainer.classList.remove('translate-x-full');
        }, 10);
    };

    // 2. Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        const state = getCurrentTestState();
        if (!state || state.examFinished) return;

        // Only handle shortcuts if not typing in an input (though we don't have many inputs)
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key) {
            case 'ArrowLeft':
                changeQuestion(-1);
                break;
            case 'ArrowRight':
                changeQuestion(1);
                break;
            case 'Enter':
                handleSubmit();
                break;
            case 'f':
            case 'F':
                toggleFlag();
                break;
            case '1':
            case 'a':
            case 'A':
                selectOption(0);
                break;
            case '2':
            case 'b':
            case 'B':
                selectOption(1);
                break;
            case '3':
            case 'c':
            case 'C':
                selectOption(2);
                break;
            case '4':
            case 'd':
            case 'D':
                selectOption(3);
                break;
            case '5':
            case 'e':
            case 'E':
                selectOption(4);
                break;
            case 'p':
            case 'P':
                toggleTimer();
                break;
            case 'Backspace':
                // Prevent backspace from navigating back in history if not in input
                e.preventDefault();
                resetState();
                break;
        }
    });

    function selectOption(index) {
        const state = getCurrentTestState();
        if (!state || state.examFinished || state.userAnswers[state.currentQuestionIndex].isSubmitted) return;

        // Check if option exists
        if (index >= state.questions[state.currentQuestionIndex].options.length) return;

        state.userAnswers[state.currentQuestionIndex].selectedIndex = index;

        // Optimized DOM Update
        const allOpts = document.querySelectorAll('.option-btn');
        allOpts.forEach(btn => btn.classList.remove('option-btn-selected'));

        const targetBtn = document.querySelector(`.option-btn[data-index="${index}"]`);
        if (targetBtn) targetBtn.classList.add('option-btn-selected');

        updateSidebarState(); // Update sidebar dots
        saveState();
    }




    // --- Initial Load ---
    updateThemeIcons();
    createTestSelector();
    if (testsToLoad.length > 0) {
        // Ensure the JS file is loaded
        if (typeof L103 !== 'undefined') {
            loadTest(testsToLoad[0]);
        } else {
            // Fallback if first test data isn't found, try to find one that is
            const availableTest = testsToLoad.find(t => typeof window[t.data] !== 'undefined' || typeof t.data === 'object');
            if (availableTest) loadTest(availableTest);
            else getEl('main-content-area').innerHTML = `<p class="text-secondary text-center">Error: Test data not found. Make sure test files are loaded correctly.</p>`;
        }
    } else {
        getEl('main-content-area').innerHTML = `<p class="text-secondary text-center">No tests found. Please add a test script to the HTML head and add it to the 'testsToLoad' array.</p>`;
    }


    // 4. Keyboard Shortcuts Info UI
    function renderKeyboardShortcuts() {
        // Find the Control Center card
        const controlCenter = document.querySelector('aside .card');
        if (!controlCenter) return;

        // Avoid duplicates
        if (document.getElementById('keyboard-shortcuts-info')) return;

        const shortcutsHTML = `
            <div id="keyboard-shortcuts-info" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 class="font-semibold mb-3 text-sm uppercase tracking-wider" style="color: var(--text-primary)">Keyboard Shortcuts</h3>
                <div class="grid grid-cols-2 gap-2 text-xs text-secondary">
                    <div class="flex justify-between items-center subtle-card p-2 rounded border border-gray-200 dark:border-gray-700">
                        <span class="font-medium">Prev/Next</span>
                        <span class="font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200 shadow-sm">←/→</span>
                    </div>
                    <div class="flex justify-between items-center subtle-card p-2 rounded border border-gray-200 dark:border-gray-700">
                        <span class="font-medium">Select</span>
                        <span class="font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200 shadow-sm">1-5</span>
                    </div>
                    <div class="flex justify-between items-center subtle-card p-2 rounded border border-gray-200 dark:border-gray-700">
                        <span class="font-medium">Submit</span>
                        <span class="font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200 shadow-sm">Enter</span>
                    </div>
                    <div class="flex justify-between items-center subtle-card p-2 rounded border border-gray-200 dark:border-gray-700">
                        <span class="font-medium">Flag</span>
                        <span class="font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200 shadow-sm">F</span>
                    </div>
                    <div class="flex justify-between items-center subtle-card p-2 rounded border border-gray-200 dark:border-gray-700">
                        <span class="font-medium">Timer</span>
                        <span class="font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200 shadow-sm">P</span>
                    </div>
                    <div class="flex justify-between items-center subtle-card p-2 rounded border border-gray-200 dark:border-gray-700">
                        <span class="font-medium">Reset</span>
                        <span class="font-mono bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200 shadow-sm flex items-center justify-center w-8">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
        `;

        // Insert before the finish button
        const finishBtn = document.getElementById('finish-test-btn');
        if (finishBtn) {
            // Add a bit more spacing to the finish button if needed, but the border-t handles separation well.
            finishBtn.insertAdjacentHTML('beforebegin', shortcutsHTML);

            // Ensure finish button has margin top if it doesn't already (it usually does via flow or class)
            // But let's add a class just in case to ensure spacing from our new block
            finishBtn.classList.add('mt-6');
        }
    }

    renderKeyboardShortcuts();

    renderKeyboardShortcuts();

    // --- FLASHCARD MODE LOGIC ---
    const startFlashcardSession = () => {
        // 1. Collect all questions
        let allQuestions = [];
        testsToLoad.forEach(test => {
            if (test.data && Array.isArray(test.data)) {
                const questionsWithContext = test.data.map(q => ({
                    ...q,
                    category: `${q.category} (${test.name})`
                }));
                allQuestions = allQuestions.concat(questionsWithContext);
            }
        });

        if (allQuestions.length === 0) {
            alert("No questions found.");
            return;
        }

        // 2. Shuffle & Select 20
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }
        const selectedQuestions = allQuestions.slice(0, 20);

        // 3. Load Test
        const flashcardTest = {
            name: "Flashcards",
            displayName: "🃏 Flashcards (20 Random)",
            data: selectedQuestions
        };

        // Clear previous state if needed
        if (testStates["Flashcards"]) delete testStates["Flashcards"];
        loadTest(flashcardTest);

        // 4. Activate Mode
        if (!isFlashcardMode) {
            toggleFlashcardMode(true);
        } else {
            // If already in mode, just refresh display
            displayQuestion();
        }
    };

    const toggleFlashcardMode = (forceActive = null) => {
        if (forceActive !== null) isFlashcardMode = forceActive;
        else isFlashcardMode = !isFlashcardMode;

        const btn = getEl('flashcard-mode-btn');
        const qContainer = getEl('question-container');
        const fContainer = getEl('flashcard-container');
        const sidebar = document.querySelector('aside');
        const mainContent = document.getElementById('main-content-area');

        if (isFlashcardMode) {
            btn.classList.add('bg-indigo-100', 'text-indigo-700', 'border-indigo-300');
            qContainer.classList.add('hidden');
            fContainer.classList.remove('hidden');

            // Sidebar remains visible as per user request
            // if (sidebar) sidebar.classList.add('hidden');
            // if (mainContent) {
            //     mainContent.classList.remove('md:col-span-3');
            //     mainContent.classList.add('md:col-span-4'); 
            // }

            displayQuestion();
        } else {
            btn.classList.remove('bg-indigo-100', 'text-indigo-700', 'border-indigo-300');
            qContainer.classList.remove('hidden');
            fContainer.classList.add('hidden');

            // Sidebar is always visible now
            // if (sidebar) sidebar.classList.remove('hidden');
            // if (mainContent) {
            //     mainContent.classList.add('md:col-span-3');
            //     mainContent.classList.remove('md:col-span-4');
            // }

            displayQuestion();
        }
    };

    const renderFlashcard = () => {
        const state = getCurrentTestState();
        if (!state) return;
        const question = state.questions[state.currentQuestionIndex];

        // --- TRANSITION FIX: Disable animation for instant reset ---
        const cardInner = getEl('flashcard-inner');
        if (cardInner) {
            cardInner.style.transition = 'none';
            cardInner.classList.remove('flip');
            // Force Reflow
            void cardInner.offsetWidth;
            // Restore transition (next tick or after reflow)
            setTimeout(() => {
                cardInner.style.transition = '';
            }, 50);
        }

        getEl('flashcard-front-content').innerHTML = question.questionText;

        // Show 3 options (Correct + 2 Random Distractors) to aid guessing
        if (question.options && question.options.length >= 3) {
            const correctIndex = question.correctAnswerIndex;
            const otherIndices = question.options.map((_, i) => i).filter(i => i !== correctIndex);

            // Shuffle distractors
            for (let i = otherIndices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [otherIndices[i], otherIndices[j]] = [otherIndices[j], otherIndices[i]];
            }

            // Pick 2 distractors
            const selectedIndices = [correctIndex, ...otherIndices.slice(0, 2)];

            // Shuffle selected options for display so correct answer isn't always first
            for (let i = selectedIndices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [selectedIndices[i], selectedIndices[j]] = [selectedIndices[j], selectedIndices[i]];
            }

            let optionsHtml = '<div class="mt-6 space-y-2 text-left w-full max-w-md">';
            selectedIndices.forEach(idx => {
                optionsHtml += `
                    <div class="p-3 rounded-lg bg-white/50 dark:bg-[var(--bg-card)] border border-gray-200 dark:border-[var(--border-color)] text-sm text-[var(--text-secondary)]">
                        <span class="font-bold mr-2 text-[var(--text-primary)]">${String.fromCharCode(65 + idx)}.</span> ${question.options[idx].text}
                    </div>`;
            });
            optionsHtml += '</div>';

            getEl('flashcard-front-content').innerHTML += optionsHtml;
        }

        // Prepare Back Content
        if (question.correctAnswerIndex != null && question.options[question.correctAnswerIndex]) {
            const correctOpt = question.options[question.correctAnswerIndex];
            // Use CSS var for correct text color instead of generic green-400
            let backHtml = `<div class="text-lg font-bold mb-4 text-green-700 dark:text-[var(--correct-text)]">${String.fromCharCode(65 + question.correctAnswerIndex)}. ${correctOpt.text}</div>`;
            backHtml += `<div class="w-full h-px bg-gray-300 dark:bg-[var(--border-color)] mb-4"></div>`;

            // --- EXPLANATION HEADER ---
            backHtml += `<h3 class="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-[var(--text-secondary)] mb-2 mt-4">Explanation</h3>`;

            backHtml += `<div class="text-base text-gray-800 dark:text-[var(--text-primary)] leading-relaxed mb-4">${correctOpt.explanation}</div>`;

            // --- LAYOUT CHANGE: Clinical Pearl displayed AFTER Explanation (User Request) ---
            if (question.clinicalPearl) {
                backHtml += renderClinicalPearl(question.clinicalPearl);
            }

            getEl('flashcard-back-answer').innerHTML = backHtml;
            // Clear old explanation container since we merged it
            getEl('flashcard-back-explanation').innerHTML = '';
        }

        // Sync Question Navigator
        updateSidebarState();

        // Update Counter
        getEl('question-counter').textContent = `Card ${state.currentQuestionIndex + 1} of ${state.questions.length}`;
    };

    const flipCard = () => {
        getEl('flashcard-inner').classList.toggle('flip');
    };

    // Event Listeners for Flashcard
    const flashcardBtn = getEl('flashcard-mode-btn');
    if (flashcardBtn) {
        flashcardBtn.removeEventListener('click', toggleFlashcardMode);
        flashcardBtn.addEventListener('click', startFlashcardSession);
    }

    const flashcardContainer = getEl('flashcard-container');
    if (flashcardContainer) flashcardContainer.addEventListener('click', flipCard);

    // --- TIME ATTACK LOGIC ---
    const startTimeAttack = () => {
        // 1. Collect all questions (reuse Master Review logic mostly)
        let allQuestions = [];
        testsToLoad.forEach(test => {
            if (test.data && Array.isArray(test.data)) {
                const questionsWithContext = test.data.map(q => ({
                    ...q,
                    category: `${q.category} (${test.name})`
                }));
                allQuestions = allQuestions.concat(questionsWithContext);
            }
        });

        if (allQuestions.length === 0) {
            alert("No questions found.");
            return;
        }

        // 2. Shuffle
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }

        // 3. Select 20
        const selectedQuestions = allQuestions.slice(0, 20);

        // 4. Create Test Object
        const timeAttackTest = {
            name: "Time Attack",
            displayName: "⚡ Time Attack (5 min)",
            data: selectedQuestions
        };

        // 5. Load it
        // Clear previous progress
        const LOCAL_STORAGE_KEY = `examProgress_Time Attack`;
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        if (testStates["Time Attack"]) delete testStates["Time Attack"];

        loadTest(timeAttackTest);

        // 6. Configure Timer for Countdown
        const state = testStates["Time Attack"];
        state.timer.isCountdown = true;
        state.timer.duration = TIME_ATTACK_DURATION * 1000;

        // 7. Auto-start
        startTimer();

        // 8. Ensure we are not in flashcard mode
        if (isFlashcardMode) toggleFlashcardMode();
    };

    const timeAttackBtn = getEl('time-attack-btn');
    if (timeAttackBtn) timeAttackBtn.addEventListener('click', startTimeAttack);

    // Sidebar Event Listeners
    getEl('flashcard-mode-btn-sidebar')?.addEventListener('click', startFlashcardSession);
    getEl('time-attack-btn-sidebar')?.addEventListener('click', startTimeAttack);
    getEl('master-review-btn-sidebar')?.addEventListener('click', startMasterReview);

    // Initial check
    updateGlobalReviewButton();
});


