import "./components/index.js";
enum Screens {
    login,
    register,
    home,
    newpost
}

class AppContainer extends HTMLElement{
    screen: Screens = Screens.register;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", ()=>{
            this.screen = Screens.home;
            this.render();
        })

        const newpost = this.shadowRoot?.querySelector("my-newpost");
        newpost?.addEventListener("post-fullfiled", ()=>{
            this.screen = Screens.home;
            this.render();
        })

        const home = this.shadowRoot?.querySelector("my-newpost");
        home?.addEventListener("my-igpost", ()=>{
            this.screen = Screens.home;
            this.render();
        })

        const register = this.shadowRoot?.querySelector("app-register");
        register?.addEventListener("register-success", ()=>{
            this.screen = Screens.login;
            this.render();

            const login = this.shadowRoot?.querySelector("app-login");
            login?.addEventListener("login-success", ()=>{
                this.screen = Screens.home;
                this.render();
            })

            const newpost = this.shadowRoot?.querySelector("my-newpost");
            newpost?.addEventListener("post-fullfiled", ()=>{
                this.screen = Screens.home;
                this.render();
            })

            const home = this.shadowRoot?.querySelector("my-newpost");
            home?.addEventListener("my-igpost", ()=>{
                this.screen = Screens.home;
                this.render();
            })
        })

      

    }

    render(){
        if(!this.shadowRoot) return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>"
                break;
        
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>"
            break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>"
            break;

            case Screens.newpost:
                this.shadowRoot.innerHTML = "<my-newpost></my-newpost>"
            break;

            default:
                break;
        }
    }
}

customElements.define("app-container",AppContainer);