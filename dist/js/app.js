const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-item');
    const body = document.querySelector('body');

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

            if (nav.classList.contains('nav-active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });
    });
};

const switchTheme = () => {
    // Elements
    const theme = document.querySelector('.theme');
    const body = document.querySelector('body');
    const links = document.querySelectorAll('a');
    const navList = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    const burgerLine1 = document.querySelector('.line-1');
    const burgerLine2 = document.querySelector('.line-2');
    const burgerLine3 = document.querySelector('.line-3');
    const textBlock = document.querySelector('.text-block');

    // Colors
    const darkColor = '#181719';
    const lightColor = '#eee';

    theme.addEventListener('click', () => {
        if (theme.classList.contains('fa-moon')) {
            theme.classList.remove('fa-moon');
            theme.classList.add('fa-sun');
            body.style.backgroundColor = lightColor;
            body.style.color = darkColor;
            logo.style.borderColor = darkColor;
            burgerLine1.style.backgroundColor = darkColor;
            burgerLine2.style.backgroundColor = darkColor;
            burgerLine3.style.backgroundColor = darkColor;
            textBlock.style.backgroundColor = lightColor;
            navList.style.backgroundColor = lightColor
            links.forEach((link) => (link.style.color = darkColor));
        } else {
            theme.classList.remove('fa-sun');
            theme.classList.add('fa-moon');
            body.style.backgroundColor = darkColor;
            body.style.color = lightColor;
            logo.style.border = `1px solid ${lightColor}`;
            burgerLine1.style.backgroundColor = lightColor;
            burgerLine2.style.backgroundColor = lightColor;
            burgerLine3.style.backgroundColor = lightColor;
            textBlock.style.backgroundColor = darkColor;
            navList.style.backgroundColor = darkColor;
            links.forEach((link) => (link.style.color = lightColor));
        }
    });
};

const app = () => {
    navSlide();
    switchTheme();
};

app();
