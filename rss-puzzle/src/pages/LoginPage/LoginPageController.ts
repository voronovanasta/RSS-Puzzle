import checkedQuerySelector from "../../types/checkedQuerySelector";
import LoginPageModel from "./LoginPageModel";

export default class LoginPageController {
  private container: HTMLElement;

  private model: LoginPageModel;

  private nameErrorContainer: Element;

  private surnameErrorContainer: Element;

  constructor(container: HTMLElement, loginModel: LoginPageModel) {
    this.container = container;
    this.model = loginModel;
    this.nameErrorContainer = checkedQuerySelector(
      document,
      "#errorNameMessage",
    );
    this.surnameErrorContainer = checkedQuerySelector(
      document,
      "#errorSurnameMessage",
    );
  }

  init() {
    this.inputHandler();
  }

  inputHandler() {
    document.addEventListener("input", (e) => {
      if (e.target === null) throw new Error("target equals null");
      const input: HTMLInputElement = e.target as HTMLInputElement;

      switch (input.id) {
        case "name":
          this.nameErrorContainer.innerHTML = "";
          if (this.model.validateInput(input.id, input.value)) {
            this.model.updateName(input.value);
          }

          break;
        case "surname":
          this.surnameErrorContainer.innerHTML = "";
          if (this.model.validateInput(input.id, input.value)) {
            this.model.updateSurname(input.value);
          }
          break;
        default:
          break;
      }
    });
  }
}
