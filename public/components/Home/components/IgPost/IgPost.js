export var Post;
(function (Post) {
    Post["ppp"] = "ppp";
    Post["nameprofile"] = "nameprofile";
    Post["pti"] = "pti";
    Post["likes"] = "likes";
    Post["caption"] = "caption";
    Post["comment"] = "comment";
    Post["date"] = "date";
    Post["nameprofile1"] = "nameprofile1";
})(Post || (Post = {}));
class IgPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
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
    connectedCallback() {
        this.render();
        console.log("shii");
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            case Post.comment:
                this.comment = newValue ? Number(newValue) : undefined;
                break;
            case Post.date:
                this.date = newValue ? Number(newValue) : undefined;
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
            
            <img src="img/ringstorys.png"> 
            <img src= ${this.ppp} height="55" class="pp"> 
            <img src="img/options.png" height="5" class="options"> 
        
            <p class="HeadText">
            <b>${this.nameprofile}</b><br>
            Los Angeles, California<br>
            </p>
             
        
            <img src=${this.pti} height="500" class="pti"> 
         
            <div class="op">
            <img src="img/like.png" height="20">&nbsp;&nbsp;
            <img src="img/comment.png" height="20">  &nbsp;
            <img src="img/send.png" height="20">
            <img src="img/save.png" height="20" class="save">
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
