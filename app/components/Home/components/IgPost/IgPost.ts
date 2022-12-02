export enum Post {
    "ppp" = "ppp",
    "nameprofile" = "nameprofile",
    "pti" = "pti",
    "likes" = "likes",
    "caption" = "caption",
    "comment" = "comment",
    "date" = "date",
    "nameprofile1" = "nameprofile1",
}
class IgPost  extends HTMLElement {
    ppp?: string;
    nameprofile?: string;
    pti?: string;
    likes?: string;
    caption?: string;
    comment?: number;
    date?: number;
    nameprofile1?: string;



    static get observedAttributes(){
        const attrs: Record<Post,null> = {
            ppp: null,
            nameprofile: null,
            pti: null,
            likes: null,
            caption: null,
            comment: null,
            date: null,
            nameprofile1: null,

        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
        console.log("shii");

    }

    attributeChangedCallback(
        propName: Post, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
            switch (propName) {
                
                case Post.comment:
                    this.comment = newValue ? Number (newValue) : undefined;
                    break;
                case Post.date:
                    this.date = newValue ? Number (newValue) : undefined;
                    break;
                default:
                    this[propName] = newValue; 
                    break;
            }
            this.render();
    }

render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./components/Home/components/IgPost/StyleIgPost.css"
            
            <img src="img/ringstorys.png" alt="User Storys"> 
            <img src= ${this.ppp} height="55" class="pp" alt="Profile Picture"> 
            <img src="img/options.png" height="5" class="options" alt="Options Post"> 
        
            <p class="HeadText">
            <b>${this.nameprofile}</b><br>
            Los Angeles, California<br>
            </p>
             
        
            <img src=${this.pti} height="500" class="pti" alt="Profile Picture Post"> 
         
            <div class="op">
            <img src="img/like.png" height="20" alt="Like Post">&nbsp;&nbsp;
            <img src="img/comment.png" height="20" alt="Comments Post">  &nbsp;
            <img src="img/send.png" height="20" alt="Send Post">
            <img src="img/save.png" height="20" class="save" alt="Save Post">
            </div> 
        
            <p class="lowText">
            <b>${this.likes} likes </b> 
            <br>
            <b>${this.nameprofile1}</b>&nbsp;${this.caption} 
            </p>
            
            <view class="otherText">
            view all ${this.comment} comments
            <br>
            <pre>${this.date} DAYS AGO</pre> 
            </p>
        
      `;
    }
  }
}
customElements.define("my-igpost", IgPost);
export default IgPost;