// script.js

"use strict";


let menuIcon = document.querySelector('#header-menu-icon');
let navbar = document.querySelector('.header-navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let footer = document.querySelector('.footer');


// Изменение активной ссылки в навбаре при скролле
window.onscroll = () => {
    let top = window.scrollY;
    let footerOffset = footer.offsetTop;
    let footerHeight = footer.offsetHeight;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(
                    `header nav a[href*=${id}]`
                ).classList.add('active');
            });
        }
    });

    if (top >= (footerOffset - window.innerHeight + footerHeight)) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(
            'header nav a[href*="contacts"]'
        ).classList.add('active');
    }
};


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Адаптив гифки
function updateGif() {
    let botGif = document.querySelector('.bot-osport');
    let reactGif = document.querySelector('.react-gif');

    if (window.innerWidth > 1285) {
        botGif.src = 'media/bot-osport-small.gif';
        reactGif.src = 'media/react-portfolio-small.gif';
    } else {
        botGif.src = 'media/bot-osport-big.gif';
        reactGif.src = 'media/react-portfolio-big.gif';
    }
}

window.addEventListener('load', updateGif);
window.addEventListener('resize', updateGif);
