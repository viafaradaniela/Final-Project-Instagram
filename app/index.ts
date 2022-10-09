import "./components/index.js";
enum Screens {
    login,
    register,
    home
}

class AppContainer extends HTMLElement{
    screen: Screens = Screens.home;

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

        const register = this.shadowRoot?.querySelector("app-register");
        register?.addEventListener("register-success", ()=>{
            this.screen = Screens.login;
            this.render();

            const login = this.shadowRoot?.querySelector("app-login");
            login?.addEventListener("login-success", ()=>{
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

            default:
                break;
        }
    }
}

customElements.define("app-container",AppContainer);