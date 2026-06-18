// ========================================
// Legna Solutions - Full Script (V2 with Form Handling)
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. DARK MODE TOGGLE ---
    const htmlElement = document.documentElement;
    const toggleButton = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('theme-icon');

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

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const isDark = htmlElement.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    // --- 2. ADVANCED FORM HANDLER (Fetch API + Loading States) ---
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnIcon = document.getElementById('btnIcon');
    const statusDiv = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            // --- Clear previous status ---
            statusDiv.classList.add('hidden');
            statusDiv.textContent = '';
            statusDiv.className = 'text-sm font-medium hidden';

            // --- Disable button & show loading state ---
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            btnIcon.className = 'fas fa-spinner fa-spin';

            // --- Collect form data ---
            const formData = new FormData(form);

            // --- Prepare the endpoint ---
            // If you are using Netlify, remove the action URL and uncomment the hidden input in HTML.
            // For Formspree, keep the action URL.
            let endpoint = form.action;
            
            // If the action is empty (Netlify mode), use the current URL with the form-name param
            if (!endpoint || endpoint === '#') {
                // Netlify specific: append ?form-name=contact
                endpoint = window.location.pathname + '?form-name=contact';
                // Add the form-name to the data for Netlify
                formData.append('form-name', 'contact');
            }

            try {
                // --- Send the data ---
                const response = await fetch(endpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (response.ok) {
                    // --- SUCCESS ---
                    statusDiv.className = 'text-sm font-medium text-green-400 bg-green-900/30 p-3 rounded-xl border border-green-500/50 block';
                    statusDiv.innerHTML = '✅ <strong>Sent!</strong> Thank you! We will review your message and send message you within 12 hours.';
                    
                    // Change button to "Sent!"
                    btnText.textContent = 'Sent! ✅';
                    btnIcon.className = 'fas fa-check-circle';
                    
                    // Reset the form fields
                    form.reset();
                } else {
                    // --- SERVER ERROR ---
                    throw new Error('Server responded with ' + response.status);
                }
            } catch (error) {
                // --- NETWORK / CLIENT ERROR ---
                statusDiv.className = 'text-sm font-medium text-red-400 bg-red-900/30 p-3 rounded-xl border border-red-500/50 block';
                statusDiv.innerHTML = '❌ <strong>Oops!</strong> Something went wrong. Please try again or contact me directly on Telegram.';
                
                // Revert button
                btnText.textContent = 'Try Again';
                btnIcon.className = 'fas fa-redo';
                submitBtn.disabled = false;
                return; // Exit early so we don't re-enable the button twice
            }

            // --- Re-enable button after success (delay to let user see "Sent!") ---
            setTimeout(() => {
                submitBtn.disabled = false;
                btnText.textContent = 'Get My Free Strategy →';
                btnIcon.className = 'fas fa-paper-plane';
            }, 4000);
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
    console.log('%c🚀 Form handling is LIVE.', 'font-size: 12px; color: #666;');
});