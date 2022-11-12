import aboutTab from './tabs/about.js';
import menuTab from './tabs/menu.js';
import "./style.scss";

const pageContent = document.querySelector('#content');

//pageContent.appendChild(aboutTab());

let menuMenuButton = document.querySelector('#menuMenu');
let mobileMenuButton = document.querySelector('#mobileMenu');

aboutTab();
menuTab();
mobileMenuButton.addEventListener('click', () => {
    menuTab();
    mobileMenuScreen.classList.toggle('open');
})
menuMenuButton.addEventListener('click', () => {
    menuTab();
})


let menuAboutButton = document.querySelector('#aboutMenu');
let mobileAboutButton = document.querySelector('#mobileAbout');
menuAboutButton.addEventListener('click', () => { 
    aboutTab();
})
mobileAboutButton.addEventListener('click', () => { 
    aboutTab();
    mobileMenuScreen.classList.toggle('open');
})

const mobileMenuScreen = document.querySelector('.mobile-menu')
const mobileMenu = document.querySelector('#hamburger-icon')
mobileMenu.addEventListener('click', () => {
    mobileMenuScreen.classList.toggle('open');
})
