document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

   
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickHamburger = hamburgerMenu.contains(event.target);

        if (!isClickInsideNavbar && !isClickHamburger) {
            hamburgerMenu.classList.remove('active');
            navbar.classList.remove('active');
        }
    });

    

    
}); 