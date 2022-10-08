export var Attributes;
(function (Attributes) {
    Attributes["igs"] = "igs";
})(Attributes || (Attributes = {}));
class IgStories extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            igs: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
        console.log("ñooo");
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        console.log("holi");
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/components/IgStories/StyleStories.css">
  
            <img src="${this.igs}" width="70" class="storie">
               

            `;
        }
    }
}
customElements.define("my-igstories", IgStories);
export default IgStories;
