// ========================================
// Legna Solutions - Full Script (with Dark Mode)
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. DARK MODE TOGGLE LOGIC ---
    const htmlElement = document.documentElement;
    const toggleButton = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('theme-icon');

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-moon');
                toggleIcon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-sun');
                toggleIcon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'light');
        }
    }

    // Check for saved user preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Check system preference (dark mode)
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    // Toggle button click event
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const isDark = htmlElement.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    // --- 2. FORM HANDLER (Gatekeeper Flow) ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = form.querySelector('input[placeholder="e.g. Samuel"]');
            const userName = nameInput ? nameInput.value.trim() : 'there';

            alert(`✅ Thank you, ${userName || 'friend'}!\n\nYour strategy request has been received. I will personally listen to your submission and send you a voice note within 12 hours.\n\n- Legna Solutions 🇪🇹`);

            form.reset();
        });
    }

    // --- 3. SMOOTH SCROLL FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 4. CONSOLE WELCOME ---
    console.log('%c🇪🇹 Legna Solutions', 'font-size: 20px; font-weight: bold; color: #C87A5A;');
    console.log('%cDigital tools built by us, for us.', 'font-size: 14px; color: #1E2A47;');
    console.log('%c🚀 Dark mode ready.', 'font-size: 12px; color: #666;');
});