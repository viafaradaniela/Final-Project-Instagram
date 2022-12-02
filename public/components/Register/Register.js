import { addUser } from "../../services/db.js";
export class Register extends HTMLElement {
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
            addUser({ email, password });
            addUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("register-success", {
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
        <link rel="stylesheet" href="./components/Register/StyleRegister.css">

            <div class="card">
            <img src="img/logo.png" height="50" alt="Instagram Logo" class="iglogo">
            <p class="text1">Sign up to view photos and videos<br>of your friends</p>
            <section class="form">
            <app-form></app-form>
            </section>
            <button>
            <span>Sing up with facebook</span>
            </button>
            <P class="o">OR</P>
            <p class="text2">Users of our service may have uploaded your contact <br> information on Instagram. <b> More information </b></p>
            <p class="text3">By signing up, you agree to <b>our Terms</b>, <br> our <b>Privacy Policy</b> and our <b>Cookies Policy. </b></p>
            </div>
            <img src="img/app.png" height="95" alt="Aplication Apps" class="apps">
        `;
    }
}
customElements.define("app-register", Register);
