const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-item');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        navLinks.forEach((link, idx) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `NavLinkFade 0.5s ease forwards ${
                    idx / 5 + 0.3
                }s`;
            }
        });
    });
};

const app = () => {
    navSlide();
};

app();
