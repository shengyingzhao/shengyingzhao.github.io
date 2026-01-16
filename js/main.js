document.addEventListener('DOMContentLoaded', () => {
    
    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('open');
        });
    }

    // --- Illustration Lightbox Logic ---
    const lbTriggers = document.querySelectorAll('.lightbox-trigger');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox && lbTriggers.length > 0) {
        // Open
        lbTriggers.forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            });
        });

        // Close functions
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => { lightboxImg.src = ''; }, 300); // Clear after fade
        };

        lightboxClose.addEventListener('click', closeLightbox);
        
        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) closeLightbox();
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
});
