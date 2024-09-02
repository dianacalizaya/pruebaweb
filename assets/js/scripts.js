document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const closeMenu = document.getElementById('close-menu');

    function toggleNav() {
        navLinks.classList.toggle('active');
    }

    function closeNav() {
        navLinks.classList.remove('active');
    }

    if (menuToggle && navLinks && closeMenu) {
        menuToggle.addEventListener('click', toggleNav);
        closeMenu.addEventListener('click', closeNav);
    } else {
        console.error('Elementos del menú no encontrados.');
    }

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});

