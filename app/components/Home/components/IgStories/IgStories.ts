export enum Attributes {
    "igs" = "igs",
    
}

class IgStories  extends HTMLElement {
    igs?: string;


    static get observedAttributes(){
        const attrs: Record<Attributes,null> = {
            igs: null,
           
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
        console.log("ñooo");

    }

    attributeChangedCallback(propName: Attributes, oldValue: string | undefined, newValue: string | undefined){
        console.log("holi");
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }

   

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/components/IgStories/Style.Stories.css">

            
            <img src="${this.igs}" width="70" class="storie">


            `;
        }
    }

}
customElements.define("my-igstories", IgStories);
export default IgStories;