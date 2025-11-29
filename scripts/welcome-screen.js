// PracticeOS Welcome Screen - Interactive floating card with particle effects
(function () {
    'use strict';

    // Create welcome screen overlay
    const welcomeScreen = document.createElement('div');
    welcomeScreen.id = 'welcome-screen';
    welcomeScreen.className = 'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700';
    welcomeScreen.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';

    // Canvas for particle effects
    const canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0 w-full h-full';
    welcomeScreen.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            // Move towards mouse
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const force = (150 - distance) / 150;
                this.x -= (dx / distance) * force * 2;
                this.y -= (dy / distance) * force * 2;
            }

            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    // Animate particles
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // Track mouse movement
    welcomeScreen.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Move floating card
        const moveX = (e.clientX - window.innerWidth / 2) / 30;
        const moveY = (e.clientY - window.innerHeight / 2) / 30;
        floatingCard.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) perspective(1000px) rotateX(${-moveY / 10}deg) rotateY(${moveX / 10}deg)`;
    });

    // Floating card
    const floatingCard = document.createElement('div');
    floatingCard.className = 'relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-12 max-w-2xl w-full mx-4 transition-transform duration-100';
    floatingCard.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d;';

    floatingCard.innerHTML = `
        <div class="text-center" style="transform: translateZ(50px);">
            <!-- Logo/Icon -->
            <div class="mb-8">
                <div class="inline-block p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-lg">
                    <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
            </div>
            
            <!-- Title -->
            <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                PracticeOS
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Your intelligent medical exam study companion
            </p>
            
            <!-- Features -->
            <div class="grid grid-cols-3 gap-4 mb-10 text-sm">
                <div class="p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                    <div class="text-2xl mb-2">📚</div>
                    <div class="font-semibold text-gray-700 dark:text-gray-200">USMLE & COMLEX</div>
                </div>
                <div class="p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                    <div class="text-2xl mb-2">🎯</div>
                    <div class="font-semibold text-gray-700 dark:text-gray-200">High-Yield</div>
                </div>
                <div class="p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                    <div class="text-2xl mb-2">📊</div>
                    <div class="font-semibold text-gray-700 dark:text-gray-200">Smart Analytics</div>
                </div>
            </div>
            
            <!-- CTA Button -->
            <button id="start-practice-btn" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <span class="relative z-10">Start Practicing</span>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <!-- Hint -->
            <p class="mt-6 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
                Move your mouse to interact
            </p>
        </div>
    `;

    welcomeScreen.appendChild(floatingCard);

    // Add to page
    document.body.appendChild(welcomeScreen);

    // Start button handler
    document.getElementById('start-practice-btn').addEventListener('click', () => {
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.pointerEvents = 'none';
        setTimeout(() => {
            welcomeScreen.remove();
        }, 700);
    });

    // Show on page load
    setTimeout(() => {
        welcomeScreen.style.opacity = '1';
    }, 100);

})();
