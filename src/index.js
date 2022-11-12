import aboutTab from './tabs/about/about.js';
import menuTab from './tabs/menu/menu.js';
import "./style.scss";

const pageContent = document.querySelector('#content');

//pageContent.appendChild(aboutTab());

let menuMenuButton = document.querySelector('#menuMenu');

aboutTab();
menuTab();
menuMenuButton.addEventListener('click', () => {
    menuTab();
})


let menuAboutButton = document.querySelector('#aboutMenu');
menuAboutButton.addEventListener('click', () => { 
    aboutTab();
})


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}