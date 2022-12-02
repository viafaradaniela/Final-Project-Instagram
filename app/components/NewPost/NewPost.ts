import { addPost } from "../../services/db.js";


export enum Attribute{
    "caption"="caption",
    "image"="image"
}

export class NewPost extends HTMLElement{

    "caption"="caption";
    "image"="image"


    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute,null>={
           caption:null,
           image:null
        }
        return Object.keys(attrs);
    }


    connectedCallback(){
        this.render()

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click",()=>{
            const event: CustomEvent<{caption:string, image:string}> = 
            new CustomEvent("post-fullfiled",{
                detail: {caption:this.caption, image:this.image},
                composed: true
            });
            this.dispatchEvent(event);
        });

        const captionInput = this.shadowRoot?.querySelector('input[id="1"]');
        const imageInput = this.shadowRoot?.querySelector('input[id="2"]');
        

        captionInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.caption = value;
        });

        imageInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.image = value;
        });
        
    }

    attributeChangedCallback(propName:Attribute,oldvalue:string,newValue:string){
        this[propName]=newValue
        this.render()
    }






    render(){
        if(!this.shadowRoot) return;
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

       
        `
    }
}

customElements.define("my-newpost",NewPost);

