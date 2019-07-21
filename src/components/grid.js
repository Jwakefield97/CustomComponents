export class Grid extends HTMLElement {

	static get observedAttributes() {  }

	constructor(...args) {
		super(...args);
	}

	connectedCallback() { 
		if(this.hasAttribute("fluid")) {
			this.classList.add("container-fluid");
		} else {
			this.classList.add("container");
		}
		this.setAttribute("style", "display: block;"); 
	}

}
customElements.define('j-grid', Grid);