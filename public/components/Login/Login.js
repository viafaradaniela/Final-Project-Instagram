import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("Las credenciales no coinciden");
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/Login/StyleLogin.css">

        <div class="card">
        <img src="img/logo.png" height="50" alt="instagram Logo" class="iglogo">
        <section class="form">
        <app-form></app-form>
        </section>
        <button>
        <span>Log in with facebook</span>
        </button>
        <P class="o">OR</P>
        </div>
        <img src="img/iglogin.png" height="650" alt="instagram Login" class="iglogin">
        <img src="img/app.png" height="95" alt="apps" class="apps">
        <img src="img/lowerinformationlogin.png" height="65" alt="Lower Login Information" class="lowerinformation">

        `;
    }
}
customElements.define("app-login", Login);
