import {hyper as hyperHTML, wire, bind, Component} from 'hyperhtml/esm';


export default class MyComponent extends HTMLElement {
		static get observedAttributes() {  }
		constructor(...args) {
				super(...args);
				this.html = hyperHTML.bind(this);
				this.dates = [];
				this.addDate = this.addDate.bind(this);
		}

		attributeChangedCallback() { this.render(); }
		connectedCallback() { this.render(); }

		addDate() {
				this.dates.push(new Date());
				this.render();
		}

		render() {
				return this.html`
						<ul> ${this.dates.map(date => `<li>${date}</li>`)}</ul>
						<button onclick=${this.addDate}>add</button>
				`;
		}
}
customElements.define('my-component', MyComponent);

