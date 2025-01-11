class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = `
            <style>
                p { color: blue; }
            </style>
            <p>Hello from My fuck!</p>
        `;
    }
}

// Define the custom element
customElements.define('navbar-w', Navbar);
