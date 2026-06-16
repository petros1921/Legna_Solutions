// ========================================
// Legna Solutions - Custom Scripts
// (Lightweight, enhances UX without bloat)
// ========================================

// --- 1. FORM HANDLER (Gatekeeper Flow) ---
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop default page reload

            // Grab the user's name for a personalized thank-you
            const nameInput = form.querySelector('input[placeholder="e.g. Samuel"]');
            const userName = nameInput ? nameInput.value.trim() : 'there';

            // Show a friendly, native alert (low cognitive load for MVP)
            alert(`✅ Thank you, ${userName || 'friend'}!\n\nYour strategy request has been received. I will personally listen to your submission and send you a voice note within 12 hours.\n\n- Legna Solutions 🇪🇹`);

            // Optionally: Reset the form fields
            form.reset();

            // FUTURE UPGRADE: If you connect to Netlify/Formspree later,
            // you can uncomment this line to actually submit the data.
            // this.submit();
        });
    }

    // --- 2. SMOOTH SCROLL FOR NAV LINKS (Optional polish) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80; // 80px accounts for sticky nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. CONSOLE WELCOME (A nice touch for devs inspecting your site) ---
    console.log('%c🇪🇹Legna Solutions', 'font-size: 20px; font-weight: bold; color: #C87A5A;');
    console.log('%cDigital tools built by us, for us.', 'font-size: 14px; color: #1E2A47;');
    console.log('%c🚀 Ready to convert. Let\'s go!', 'font-size: 12px; color: #666;');
});