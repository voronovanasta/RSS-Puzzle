import { RouterOptions } from "./types/RouterOptions";
import LoginPageComponent from "./components/LoginPage/LoginPageComponent";

export default class Router {
  private routes: RouterOptions;

  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    console.log(this.container);
    this.routes = {};
  }

  init() {
    this.routes = {
      "/": () => this.launchLogin(),
      // "/start": this.launchStart,
      // "/game": this.launchGame,
      // "/statistics": this.launchStats
    };
    window.addEventListener("popstate", () => this.render());
    this.render();
  }

  render() {
    const path = window.location.pathname;
    if (this.routes[path]) {
      console.log(this.routes[path]);
      console.log(this.routes[path]());
      this.routes[path]();
    } else {
      console.log("launch");
      this.launchLogin();
    }
    // this.setActiveLink(path);
  }

  // setActiveLink(path: string = "/") {
  //   document.querySelectorAll(".menu__link").forEach((link: Element) => {
  //     link.classList.toggle("active", path === link.href);
  //   });
  // }

  launchLogin() {
    console.log(this.container);
    this.container.innerHTML = LoginPageComponent();
  }
}
