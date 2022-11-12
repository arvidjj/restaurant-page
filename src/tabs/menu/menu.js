import { html, render } from 'lit-html';
import Pizza from '../../resources/menuitems/pizza.jpg';

function component() {
    const pageContent = document.querySelector('#content');

    const menuBlock = () => html`
    <main>
        <div class="menu-info">
            <h2>Menu Items:</h2>
            <div id="menu-item-container">
                <div class="menu-item">
                    <div class="item-image">
                        <img src="${Pizza}" alt="Food" />
                    </div>
                    <div class="item-description">
                        <h3>Pizza Natural</h3>
                        <p>Mmm yummy</p>
                    </div>
                </div>

                <div class="menu-item">
                    <div class="item-image">
                        <img src="${Pizza}" alt="Food" />
                    </div>
                    <div class="item-description">
                        <p>THIS FOOD IS TASTY!</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    `

    render(menuBlock(), pageContent);
}

export default component;