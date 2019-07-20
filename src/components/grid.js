export class Grid extends HTMLElement {

	static get observedAttributes() {  }

	constructor(...args) {
		super(...args);
	}

	connectedCallback() { 
		 this.classList.add("container");
		 this.setAttribute("style", "display: block;"); 
	}

}
customElements.define('j-grid', Grid);