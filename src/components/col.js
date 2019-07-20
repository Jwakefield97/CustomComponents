export class Col extends HTMLElement {

	static get observedAttributes() { return ["size"]; }

	constructor(...args) {
		super(...args);
	}

	connectedCallback() { 
		this.classList.add(`col-${this.getAttribute('size')}`);
		this.setAttribute("style", "display: block;");  
	}

}
customElements.define('j-col', Col);