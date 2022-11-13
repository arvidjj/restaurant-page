import { html, render } from 'lit-html'


function component() {

    const pageContent = document.querySelector('#content');
    const contactBlock = () => html`
        <div class="contact-info">
            <h1>Contact us</h1>
            <div class="contact-information">
                <div class="information-phone">
                    <h2>Phone Information:</h2>
                    <ul>
                        <li>
                            <p>Branch 1: <span>1111-1111111</span></p>
                        </li>
                        <li>
                            <p>Branch 2: <span>1234-1234123</span></p>
                        </li>
                        <li>
                            <p>Branch 3: <span>9978-9763543</span></p>
                        </li>
                    </ul>
                    <h2>Email:</h2>
                    <p>coolafrestaurant@email.com</p>
                </div>
                <div class="information-location">
                    <h2>Location</h2>
                    <p>9661 Rockcrest Lane
                        Skokie, IL 60076</p>
                </div>
            </div>
        </div>
    `

    render(contactBlock(), pageContent)
}

export default component;