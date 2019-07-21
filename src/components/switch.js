import { hyper } from 'hyperhtml/esm';
import "../css/switch.css";

export class Switch extends HTMLElement {
            
	static get observedAttributes() { return ["checked"]; }

	constructor(...args) {
		super(...args);
		this.html = hyper.bind(this);
	}

	attributeChangedCallback() { 
		this.render(); 
		this.querySelector("input").checked = this.hasAttribute("checked");
	}

	connectedCallback() { 
		this.render(); 
	}

	toggle() {
		this.querySelector("input").checked = !this.querySelector("input").checked;
	}

	value() {
		return this.querySelector("input").checked;
	}

	render() {
		return this.html`
			<label class="switch">
				<input type="checkbox" />
				<div class="slider round"></div>
			</label>
		`;
	}
}
customElements.define('j-switch', Switch);