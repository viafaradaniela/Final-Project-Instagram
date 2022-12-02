import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
    Screens[Screens["newpost"] = 3] = "newpost";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c, _d;
        this.render();
        const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
            this.screen = Screens.home;
            this.render();
        });
        const newpost = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("my-newpost");
        newpost === null || newpost === void 0 ? void 0 : newpost.addEventListener("post-fullfiled", () => {
            this.screen = Screens.home;
            this.render();
        });
        const home = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("my-newpost");
        home === null || home === void 0 ? void 0 : home.addEventListener("my-igpost", () => {
            this.screen = Screens.home;
            this.render();
        });
        const register = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("app-register");
        register === null || register === void 0 ? void 0 : register.addEventListener("register-success", () => {
            var _a, _b, _c;
            this.screen = Screens.login;
            this.render();
            const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-login");
            login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
                this.screen = Screens.home;
                this.render();
            });
            const newpost = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("my-newpost");
            newpost === null || newpost === void 0 ? void 0 : newpost.addEventListener("post-fullfiled", () => {
                this.screen = Screens.home;
                this.render();
            });
            const home = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("my-newpost");
            home === null || home === void 0 ? void 0 : home.addEventListener("my-igpost", () => {
                this.screen = Screens.home;
                this.render();
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>";
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            case Screens.newpost:
                this.shadowRoot.innerHTML = "<my-newpost></my-newpost>";
                break;
            default:
                break;
        }
    }
}
customElements.define("app-container", AppContainer);
