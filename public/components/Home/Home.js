import "./components/indexComponents.js";
import { Attribute } from "./components/IgSuggestions/IgSuggestions.js";
import { Attributes } from "./components/IgStories/IgStories.js";
import { Post } from "./components/IgPost/IgPost.js";
import data from "./data.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.igstories = [];
        this.igpost = [];
        this.igheadbar = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-ig");
            profileCard.setAttribute(Attribute.pp, user.pp);
            profileCard.setAttribute(Attribute.username, user.username);
            profileCard.setAttribute(Attribute.peoplefollow, user.peoplefollow);
            this.profiles.push(profileCard);
        });
        data.forEach((stories) => {
            const storiesCard = this.ownerDocument.createElement("my-igstories");
            storiesCard.setAttribute(Attributes.igs, stories.igs);
            this.igstories.push(storiesCard);
        });
        data.forEach((userpost) => {
            const igpostCard = this.ownerDocument.createElement("my-igpost");
            igpostCard.setAttribute(Post.ppp, userpost.ppp);
            igpostCard.setAttribute(Post.nameprofile, userpost.nameprofile);
            igpostCard.setAttribute(Post.pti, userpost.pti);
            igpostCard.setAttribute(Post.likes, userpost.likes);
            igpostCard.setAttribute(Post.caption, userpost.caption);
            igpostCard.setAttribute(Post.comment, String(userpost.comment));
            igpostCard.setAttribute(Post.date, String(userpost.date));
            igpostCard.setAttribute(Post.nameprofile1, userpost.nameprofile1);
            this.igpost.push(igpostCard);
            const nave = this.ownerDocument.createElement("my-igheadbar");
            this.igheadbar.push(nave);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.igstories.forEach((igstories) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(igstories);
            });
            this.igpost.forEach((igpost) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(igpost);
            });
            this.igheadbar.forEach((headbar) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(headbar);
            });
        }
    }
}
customElements.define("app-home", Home);
