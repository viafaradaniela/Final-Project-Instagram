class IgHeadBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/components/IgHeadBar/StyleIgHeadBar.css">
            
            <section>
            <nav class="headbar">
            <div class="head-wrapper">
             <img src="./img/logo.png" class="logo" alt="">
             <div class="head-items">
             <img src="./img/homevar.png" class="icon" alt="">
             <img src="./img/chatvar.png" class="icon" alt="">
             <img src="./img/uploadvar.png" class="icon" alt="">
             <img src="./img/serachvar.png" class="icon" alt="">
             <img src="./img/likevar.png" class="icon" alt="">
             <img src="./img/minipp.png" class="icon" alt="">
             <img src="./img/lookvar.png" class="look" alt="">

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
