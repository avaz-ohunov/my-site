// script.js

"use strict";


let menuIcon = document.querySelector('#header-menu-icon');
let navbar = document.querySelector('.header-navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let footer = document.querySelector('.footer');


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
