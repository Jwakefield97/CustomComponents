export class Row extends HTMLElement {

	static get observedAttributes() {  }

	constructor(...args) {
		super(...args);
	}

	connectedCallback() { 
		this.classList.add("row"); 
		this.setAttribute("style", "display: block;"); 
	}

}
customElements.define('j-row', Row);