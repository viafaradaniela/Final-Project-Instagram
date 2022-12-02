export var Attribute;
(function (Attribute) {
    Attribute["caption"] = "caption";
    Attribute["image"] = "image";
})(Attribute || (Attribute = {}));
export class NewPost extends HTMLElement {
    constructor() {
        super();
        this["caption"] = "caption";
        this["image"] = "image";
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            caption: null,
            image: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        var _a, _b, _c;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("post-fullfiled", {
                detail: { caption: this.caption, image: this.image },
                composed: true
            });
            this.dispatchEvent(event);
        });
        const captionInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[id="1"]');
        const imageInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[id="2"]');
        captionInput === null || captionInput === void 0 ? void 0 : captionInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.caption = value;
        });
        imageInput === null || imageInput === void 0 ? void 0 : imageInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.image = value;
        });
    }
    attributeChangedCallback(propName, oldvalue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./components/NewPost/NewPostStyle.css">
        
        <div class="card">
        <img src="img/logo.png" height="50" alt="instagram Logo" class="iglogo">
        <div class="input-group">
        <input required="" type="text" id="1" name="text" autocomplete="off" class="input">
        <label class="user-label">Caption</label>
        </div>

        <div>
        <div class="input-group2">
        <input required="" type="text" id="2" name="text" autocomplete="off" class="input">
        <label class="user-label">Image Link</label>
        </div>

        <div>
        <button>
        <span>Create Post</span>
        </button>
        </div>

       
        `;
    }
}
customElements.define("my-newpost", NewPost);
