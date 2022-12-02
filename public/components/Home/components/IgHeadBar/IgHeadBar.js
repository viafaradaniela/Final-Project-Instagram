export class IgHeadBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        const createPostButton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        createPostButton === null || createPostButton === void 0 ? void 0 : createPostButton.addEventListener('click', () => {
            console.log('button clicked');
            const event = new CustomEvent("my-igpost", { composed: true });
            this.dispatchEvent(event);
        });
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/components/IgHeadBar/StyleIgHeadBar.css">
            
            <section>
            <nav class="headbar">
            <div class="head-wrapper">
             <img src="./img/logo.png" class="logo" alt="Instagram Logo">
             <div class="head-items">
             <img src="./img/homevar.png" class="icon" alt="Home">
             <img src="./img/chatvar.png" class="icon" alt="Chats">
             <button class="icon-btn add-btn">
             <div class="add-icon"></div>
             <div class="btn-txt">Add Post</div>
             </button>
             <img src="./img/serachvar.png" class="icon" alt="Searc">
             <img src="./img/likevar.png" class="icon" alt="Likes">
             <img src="./img/minipp.png" class="icon" alt="My Profile">
             <img src="./img/lookvar.png" class="look" alt="Search Bar">

               </div>
             </div>
            
          </nav>
         
            </section>
            `;
        }
    }
}
customElements.define("my-igheadbar", IgHeadBar);
export default IgHeadBar;
