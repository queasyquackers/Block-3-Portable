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

    const getCurrentTestState = () => {
        if (!currentTestName || !testStates[currentTestName]) return null;
        return testStates[currentTestName];
    };

    const getEl = (id) => document.getElementById(id);

    // --- Theme Handling ---
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
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateThemeIcons();
    });

    // --- Prompt Generation ---
    const generatePromptBtn = getEl('generate-prompt-btn');
    const promptOutputArea = getEl('prompt-output-area');
    generatePromptBtn.addEventListener('click', () => {
        const state = getCurrentTestState();
        if (!state) return;
        const numberOfQuestions = 10;
        const weakCategories = Object.entries(state.currentSummaryStats)
            .filter(([_, stats]) => stats.correct < stats.total)
            .sort(([, a], [, b]) => (a.correct / a.total) - (b.correct / b.total));

        let dynamicInputText = "";
        if (weakCategories.length === 0) {
            const allCategories = Object.keys(state.currentSummaryStats).join(', ');
            dynamicInputText = `I did not get any questions wrong on this test. Please generate a mixed review set from all topics covered (${allCategories}).`;
        } else {
            dynamicInputText = "The following list contains my weak areas from the test...:\n";
            weakCategories.forEach(([category, stats]) => {
                const percent = ((stats.correct / stats.total) * 100).toFixed(0);
                dynamicInputText += `- ${category}: Scored ${percent}% (${stats.correct}/${stats.total})\n`;
            });
        }
        const fullPrompt = `... (Your prompt generation logic) ...\n# Dynamic Inputs\n${dynamicInputText}\n...`;
        promptOutputArea.value = fullPrompt.trim();
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
        promptOutputArea.value = '';
    };

    function switchToTest(testName) {
        if (currentTestName && testStates[currentTestName]) {
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
        if (!testStates[testObject.name]) {
            testStates[testObject.name] = {
                questions: testObject.data,
                currentQuestionIndex: 0,
                userAnswers: [],
                flaggedQuestions: new Set(),
                timer: { interval: null, startTime: 0, elapsedTime: 0, isRunning: false },
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

        localStorage.removeItem(`examProgress_${currentTestName}`);
        generateSummary(currentTestName);

        const navButtons = getEl('question-grid').querySelectorAll('button');
        navButtons.forEach((btn, index) => {
            btn.classList.remove('q-grid-btn-answered', 'q-grid-btn-flagged', 'q-grid-btn-current');
            if (state.userAnswers[index].isCorrect) {
                btn.classList.add('q-grid-btn-correct');
            } else {
                btn.classList.add('q-grid-btn-incorrect');
            }
        });
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

        getEl('question-counter').textContent = `Question ${state.currentQuestionIndex + 1} of ${state.questions.length}`;

        // Update flag button
        if (state.flaggedQuestions.has(state.currentQuestionIndex)) {
            getEl('flag-btn-text').textContent = 'Unflag';
            getEl('flag-question-btn').classList.add('text-yellow-500');
        } else {
            getEl('flag-btn-text').textContent = 'Flag for Review';
            getEl('flag-question-btn').classList.remove('text-yellow-500');
        }

        const qText = document.createElement('p');
        qText.className = 'text-lg leading-relaxed mb-6';
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

        // --- IMAGE LOGIC ---
        if ((answerState.isSubmitted || state.examFinished) && question.slideImagePath && question.slideImagePath !== "") {
            slideContainer.classList.remove('hidden');
            slidePlaceholder.innerHTML = '';

            // Create Image Wrapper (Simple Display)
            const imgWrapper = document.createElement('div');
            imgWrapper.className = "relative group";

            const img = document.createElement('img');
            img.src = question.slideImagePath.replace(/\\/g, '/');
            img.alt = question.category;
            img.className = "w-full h-auto rounded-lg border border-default shadow-sm";

            imgWrapper.appendChild(img);
            slidePlaceholder.appendChild(imgWrapper);

            if (question.slideImageDescription && question.slideImageDescription !== "") {
                const descDiv = document.createElement('div');
                descDiv.className = "image-context-box animate-fade-in mt-6";
                descDiv.innerHTML = `
                    <div class="image-context-header flex items-center justify-center gap-2 mb-3 text-secondary font-bold uppercase tracking-wider text-xs">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        Image Context
                    </div>
                    <div class="image-context-content text-sm leading-relaxed text-primary bg-gray-50 dark:bg-slate-900/80 p-5 rounded-xl border border-default shadow-sm">
                        ${question.slideImageDescription}
                    </div>
                `;
                slidePlaceholder.appendChild(descDiv);
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
        if (!state || state.examFinished) return;
        const LOCAL_STORAGE_KEY = `examProgress_${currentTestName}`;
        const stateToSave = {
            currentQuestionIndex: state.currentQuestionIndex,
            userAnswers: state.userAnswers.map(a => ({ ...a, strikedOutIndices: Array.from(a.strikedOutIndices) })),
            flaggedQuestions: Array.from(state.flaggedQuestions),
            timer: { elapsedTime: state.timer.elapsedTime + (state.timer.isRunning ? Date.now() - state.timer.startTime : 0) }
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
        const totalElapsed = state.timer.elapsedTime + (now - state.timer.startTime);
        getEl('timer-display').textContent = formatTime(Math.floor(totalElapsed / 1000));
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
        if (state.flaggedQuestions.has(state.currentQuestionIndex)) {
            state.flaggedQuestions.delete(state.currentQuestionIndex);
        } else {
            state.flaggedQuestions.add(state.currentQuestionIndex);
        }
        displayQuestion();
        saveState();
    };

    const handleSelectAnswer = (e) => {
        const state = getCurrentTestState();
        if (!state || state.examFinished) return;
        const selectedButton = e.target.closest('button[data-index]');
        if (!selectedButton || state.examFinished || state.userAnswers[state.currentQuestionIndex].isSubmitted) return;
        const selectedIndex = parseInt(selectedButton.dataset.index);
        state.userAnswers[state.currentQuestionIndex].selectedIndex = selectedIndex;
        displayQuestion();
        saveState();
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

            let imageHtml = '';
            if (q.slideImagePath && q.slideImagePath !== "") {
                const descHtml = q.slideImageDescription
                    ? `<div class="mt-4 p-4 border-l-4 text-sm rounded-r shadow-md" style="border-color: var(--accent-color); background-color: var(--bg-selected);">
                         <strong class="block mb-2" style="color: var(--text-primary);">Context & Clues:</strong>
                         <span style="color: var(--text-primary);">${q.slideImageDescription}</span>
                       </div>`
                    : '';

                imageHtml = `
                <div class="mt-4 p-4 rounded-lg border border-default subtle-card">
                    <h4 class="font-semibold mb-2">Relevant Diagram</h4>
                    <img src="${q.slideImagePath}" alt="${q.category}" class="w-full h-auto rounded-lg border border-default">
                    ${descHtml}
                </div>`;
            }

            questionEl.innerHTML = `
                <p class="font-semibold text-secondary">Question ${originalIndex + 1} (${q.category})</p>
                <p class="font-bold text-lg mt-1">${q.questionText}</p>
                <div class="mt-4 space-y-2">${optionsHtml}</div>
                ${imageHtml}`;

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


    // ... (existing code) ...

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


});


