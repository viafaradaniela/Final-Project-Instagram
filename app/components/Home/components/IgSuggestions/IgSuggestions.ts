export enum Attribute {
    "pp" = "pp",
    "username" = "username",
    "peoplefollow" = "peoplefollow",
}

class IgHome  extends HTMLElement {
    pp?: string;
    username?: string;
    peoplefollow?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            pp: null,
            peoplefollow: null,
            username: null
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
        console.log("holi");
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }

   

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML =`
            <link rel="stylesheet" href="./components/Home/components/IgSuggestions/StyleIgSuggestions.css">
            <p class="myprofileinformation">
             <b>daniela_6947</b><br><br>
             D A N I E L A :)
            </p>

            
            <img src=${this.pp} width="40" class="pp">

            <p class="ppinformation">
             <b>${this.username}</b><br>
             <i style="color: rgb(213, 213, 213); ">${this.peoplefollow}</style=> 
            </p>

            <p class="suggest">
             <b>Suggestions for you</b><br>  
            </p>

            <p class="suggest1">
             See all 
            </p>

            <p class="suggest2">
             Change
            </p>

            <p class="follow">
             follow
            </p>

            <p class="follow2">
             follow
            </p>

            <p class="follow3">
             follow
            </p>
        
            <p class="follow4">
             follow
            </p>
            
            <p class="follow5">
             follow
            </p>

            <div>
            <div class="card"></div>
             <img src="img/myprofilepic.png" width="70" class="myprofilepic">
             <img src="img/lowinformation.png" width="300" class="lowinformation">
             <div>
            <div class="card2"></div>
            <div class="card3"></div>
            <div class="card4"></div>
            <div class="card5"></div>
            <div class="card6"></div>



             
            </div>
            `;
        }
    }

}
customElements.define("my-ig", IgHome);
export default IgHome;