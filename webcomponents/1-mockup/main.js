class MockupElement extends HTMLElement {
   constructor() {
       super();
       this.shadow = this.attachShadow({ mode: 'open' });
       console.log(this.shadow);

   }
   connectedCallback() {
       console.log('MockupElement#connectedCallback');
       let $template = document.currentScript.ownerDocument.querySelector('#mockup-template')
           .content.cloneNode(true);
       this.shadow.appendChild(template);
       console.log(this.shadow);

       this.shadow.querySelector('img').setAttribute('src', this.attributes.xxxx.value);
       this.shadow.querySelector('h1').textContent = this.attributes.label.value;
       
   }
}

window.customElements.define('mockup-element', MockupElement)

