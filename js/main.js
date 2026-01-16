document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Select the elements
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.mobile-menu a');

    // 2. Add click event to Hamburger
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class for the X animation
            hamburger.classList.toggle('active');
            // Toggle the 'open' class to slide the menu in
            mobileMenu.classList.toggle('open');
        });
    }

    // 3. Close menu when a link is clicked (Optional UX improvement)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });
});
