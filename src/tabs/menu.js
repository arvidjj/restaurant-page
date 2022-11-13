import { html, render } from 'lit-html';

import * as itemController from '../menuItems.js';

function component() {
    const pageContent = document.querySelector('#content');

    const menuBlock = () => html`
    <main>
        <div class="menu-info">
            <h2>Menu Items:</h2>
            <hr />
            <h3 id="menu-category">Principal</h3>
            <div id="menu-item-container">
    
            </div>
        </div>
    </main>
    `

    render(menuBlock(), pageContent);
    renderItems()
}
/*<div class="menu-item">
         <div class="item-image">
        <img src="${Pizza}" alt="Food" />
     </div>
     <div class="item-description">
        <h3 id="food-title">Pizza Natural</h3>
        <p id="food-description">Mmm yummy</p>
         <p id="food-price">14.99$</p>
    </div>
</div>*/
function renderItems() {

    console.log('rendering Items...')
    const menuItemContainer = document.querySelector('#menu-item-container');
    menuItemContainer.innerHTML = '';
    console.log(itemController.itemsStored)

    itemController.itemsStored.forEach((item, index) => {
        const itemImage = require(`../resources/menuitems/${item.image}`)
        const itemCard = document.createElement('div');

        // <div class="menu-item" id="item-${index}">
        // </div>
        itemCard.classList.add('menu-item')
        itemCard.setAttribute('id', `item-${index}`)

        itemCard.innerHTML = `
            <div class="item-image">
                <img src="${itemImage}" alt="${item.title}" />
            </div>
            <div class="item-description">
                <h3 id="food-title">${item.title}</h3>
                <p id="food-description">${item.description}</p>
                <p id="food-price">${item.price} $</p>
            </div>  
        `
        
        menuItemContainer.appendChild(itemCard);
        console.log(`rendering ${index}`)
    })
}

export default component;