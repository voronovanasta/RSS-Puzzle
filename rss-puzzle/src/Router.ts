import { RouterOptions } from "./types/RouterOptions";
import LoginPageComponent from "./components/LoginPage/LoginPageComponent";
import LoginPageController from "./pages/LoginPage/LoginPageController";
import LoginPageModel from "./pages/LoginPage/LoginPageModel";
import LoginPageView from "./pages/LoginPage/LoginPageView";

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
      "/start": this.launchStart,
      // "/game": this.launchGame,
      // "/statistics": this.launchStats
    };
    window.addEventListener("popstate", () => this.render());
    this.render();
  }

  render() {
    console.log("router launches");
    const path = window.location.pathname;
    if (this.routes[path]) {
      this.routes[path]();
    } else {
      this.launchLogin();
    }
    // this.setActiveLink(path);
  }

  // setActiveLink(path: string = "/") {
  //   document.querySelectorAll(".router-link").forEach((el: Element) => {
  //     const link = el as HTMLAnchorElement;
  //     link.classList.toggle("active", path === link.href);
  //   });
  // }

  launchLogin() {
    this.container.innerHTML = LoginPageComponent();
    const loginView = new LoginPageView(this.container);
    const loginModel = new LoginPageModel(loginView);
    const loginController = new LoginPageController(this.container, loginModel);
    loginController.init();
  }

  launchStart() {
    console.log("start new start page");
  }
}
