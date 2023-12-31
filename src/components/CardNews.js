class CardNews extends HTMLElement {
    
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

        // estilizar
        // const style = document.createElement('style');
        // style.textContent = `
        //     h1 {
        //         color: red;
        //     }
        // `

        // enviar para a shadow

        // shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        
    }

}

customElements.define('card-news', CardNews);