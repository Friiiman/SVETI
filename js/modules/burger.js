export default function burger() {

  function navHidden() {
    const mainNav = document.querySelector(".main-nav");
    mainNav.classList.add("main-nav--hidden");
  }

  function navToggle() {
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", (e) => {
      const mainNav = document.querySelector(".main-nav");
      const body = document.querySelector("body");
      mainNav.classList.toggle("main-nav--hidden");
      body.classList.toggle("body--scroll-off");
    });
  }

  navHidden();
  navToggle();
}
