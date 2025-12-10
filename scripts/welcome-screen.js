// PracticeOS Welcome Screen - Minimal Premium Glass
(function () {
    'use strict';

    // Create overlay
    const welcomeScreen = document.createElement('div');
    welcomeScreen.id = 'welcome-screen';
    // Glass styling for the backdrop (blur + dim)
    welcomeScreen.className = 'fixed inset-0 z-50 flex items-center justify-center transition-all duration-500';
    welcomeScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    welcomeScreen.style.backdropFilter = 'blur(8px)';
    welcomeScreen.style.webkitBackdropFilter = 'blur(8px)';

    // Create the Main Glass Card
    const card = document.createElement('div');
    // Using existing utility classes: glass-panel, card styling
    card.className = 'glass-panel p-10 rounded-3xl shadow-2xl text-center max-w-sm w-full transform transition-all duration-500 scale-100';
    card.style.border = '1px solid var(--glass-border)';
    card.style.background = 'var(--glass-bg)';

    // Smart Greeting
    const hour = new Date().getHours();
    let greeting = 'Welcome back';
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';

    // Check for active session
    let buttonText = 'Begin Session';
    let resumeText = '';
    // simple check if any exam key exists
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith('examProgress_')) {
            buttonText = 'Resume Session';
            resumeText = '<span class="text-xs font-normal opacity-80 block mt-1">Pick up where you left off</span>';
            break;
        }
    }

    // Calculate Stats
    let totalQuestions = 0;
    let totalAnswered = 0;
    let totalCorrect = 0;

    // Ensure we can access the tests variable
    const tests = (typeof window.testsToLoad !== 'undefined') ? window.testsToLoad :
        (typeof testsToLoad !== 'undefined') ? testsToLoad : [];

    if (tests.length > 0) {
        tests.forEach(test => {
            const key = `examProgress_${test.name}`;
            const stored = localStorage.getItem(key);

            if (stored) {
                try {
                    const state = JSON.parse(stored);
                    const qCount = state.userAnswers.length;
                    const ansCount = state.userAnswers.filter(a => a.isSubmitted).length;
                    const corrCount = state.userAnswers.filter(a => a.isCorrect).length;

                    totalQuestions += qCount;
                    totalAnswered += ansCount;
                    totalCorrect += corrCount;
                } catch (e) {
                    console.error("Error parsing stats", e);
                }
            }
        });
    }

    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

    // Random Tips System
    const tips = [
        "Tip: Use <span class='font-bold'>Arrow Keys</span> (←/→) to navigate questions quickly.",
        "Tip: Press <span class='font-bold'>1-5</span> to select an answer instantly.",
        "Tip: Press <span class='font-bold'>F</span> to flag a tricky question for review.",
        "Tip: Press <span class='font-bold'>Enter</span> to submit your answer.",
        "Tip: Press <span class='font-bold'>P</span> to pause/resume the timer.",
        "Tip: <span class='font-bold'>Dark Mode</span> is easier on the eyes at night.",
        "Tip: Unsure? <span class='font-bold'>Flag</span> it and move on. Don't get stuck.",
        "Tip: Check the <span class='font-bold'>Control Center</span> sidebar for your stats.",
        "Tip: Read the last sentence of the question first to identify the core ask.",
        "Tip: Use <span class='font-bold'>Master Review</span> to see all questions at a glance.",
        "Tip: Process of elimination increases your odds significantly.",
        "Tip: Look for key demographics (age, sex) in the clinical vignette.",
        "Tip: Always read the explanation, even for questions you got right.",
        "Tip: Take a deep breath. You are prepared.",
        "Tip: Use the <span class='font-bold'>Question Grid</span> to jump around.",
        "Tip: Your progress is saved automatically to your device.",
        "Tip: Reset a test via the Control Center to practice again.",
        "Tip: Consistency is key. A little practice every day adds up.",
        "Tip: Teaching a concept to someone else is the best way to learn.",
        "Tip: Trust your first instinct unless you find contradictory evidence."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    // Content
    card.innerHTML = `
        <div class="flex flex-col items-center mb-6">
            <div class="inline-flex p-4 rounded-2xl shadow-lg nav-logo-box text-white mb-3">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
            </div>
            <div class="text-2xl font-bold tracking-tight" style="font-family: var(--font-heading); color: var(--text-primary)">
                Practice<span style="color: var(--accent-color)">OS</span>
            </div>
        </div>
        
        <h1 class="text-2xl font-semibold mb-1 tracking-tight overflow-visible" style="font-family: var(--font-body); color: var(--text-primary);">
            ${greeting}
        </h1>
        
        <p class="text-sm font-medium mb-4" style="color: var(--text-secondary);">
            Block 3 • Medical Sciences
        </p>

        <!-- Stats Badges -->
        <div class="flex justify-center gap-3 mb-6">
             <div class="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                ${totalAnswered} Questions Done
             </div>
             <div class="px-3 py-1 rounded-full text-xs font-bold ${accuracy >= 70 ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' : 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200'}">
                ${accuracy}% Accuracy
             </div>
        </div>

        <button id="start-practice-btn" class="w-full btn-primary py-3 rounded-xl shadow-lg text-lg font-bold tracking-wide transform transition hover:scale-[1.02]">
            ${buttonText}
            ${resumeText}
        </button>
        
        <p class="mt-4 text-xs opacity-90" style="color: var(--text-primary);">
            Press <span class="font-bold border border-current rounded px-1">Enter</span> to start
            <br>
            <span class="opacity-80 mt-1 inline-block">${randomTip}</span>
        </p>
    `;

    welcomeScreen.appendChild(card);
    document.body.appendChild(welcomeScreen);

    // Initial State for Animation
    welcomeScreen.style.opacity = '0';
    card.style.transform = 'scale(0.95)';

    // Animate In
    setTimeout(() => {
        welcomeScreen.style.opacity = '1';
        card.style.transform = 'scale(1)';
    }, 50);

    const dismissScreen = () => {
        // Animate Out
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.pointerEvents = 'none';
        card.style.transform = 'scale(1.1)'; // Zoom out effect

        setTimeout(() => {
            welcomeScreen.remove();
        }, 500);

        // Remove listener
        document.removeEventListener('keydown', handleKey, { capture: true });
    };

    // key handler
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopImmediatePropagation();
            dismissScreen();
        }
    };
    document.addEventListener('keydown', handleKey, { capture: true });

    // Interaction
    const startBtn = card.querySelector('#start-practice-btn');
    startBtn.addEventListener('click', dismissScreen);

})();
