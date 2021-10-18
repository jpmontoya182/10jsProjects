window.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  const tabs = new Tabs(document.querySelector(".container"));
  tabs.doEventBindings();
}

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabButtons = Array.from(container.querySelectorAll(".trigger"));
    this.activateTabAndShowItsContent =
      this.activateTabAndShowItsContent.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  doEventBindings() {
    this.tabButtons.forEach((tabButton) => {
      tabButton.addEventListener("click", this.activateTabAndShowItsContent);
      tabButton.addEventListener("keyup", this.handleTabChange);
    });
  }

  handleTabChange(event) {
    // console.log(event.which);
    if (event.which === 9) {
      this.activateTabAndShowItsContent(event);
    }
  }

  activateTabAndShowItsContent(event) {
    this.container.querySelector("button.active").classList.remove("active");
    event.currentTarget.classList.add("active");
    this.container.querySelector("div.content").classList.remove("active");
    const selector = event.currentTarget.getAttribute("data-target");
    this.container.querySelector(selector).classList.add("active");
  }
}
