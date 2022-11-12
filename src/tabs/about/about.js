import Template from '../../resources/template_main.jpg';
import menuTab from '../menu/menu.js';
import {html, render} from 'lit-html';

function component() {
    const pageContent = document.querySelector('#content');

    const aboutBlock = () => html`<main>
        
        <div class="hero">
            <div class="heroImage">
                <img src="${Template}" alt="Main Image">
            </div>
            <div class="heroText">
                <h2>Welcome to the best restaurant!</h2>
                <p>We sell a lot of food.</p>
                <button id="bigMenuButton" style="cursor:pointer" 
                class="button fancy-button important-button">Go to Menu >></button>
            </div>
        </div>
        <div class="info">
            <div class="hoursInfo">
                <h2>Business Hours:</h2>
                <ul>
                    <li><p>00:00 PM - 6:00 PM</p></li>
                    <li><p>8:00 PM - 0:00 AM</p></li>
                    <li><p>00:00 PM - 6:00 PM</p></li>
                </ul>
            </div>
        </div>
    </main>`

    render(aboutBlock(), pageContent);
   
    let bigMenuButton = document.querySelector('#bigMenuButton');
    bigMenuButton.addEventListener('click', () => {
        menuTab();
    })
}

export default component;