// Mobile-menu

const navToggle = document.querySelector(".main-nav__toggle");
const navList = document.querySelector(".main-nav__list");

navList.classList.add("main-nav__list--close");
navToggle.classList.remove("main-nav__toggle--no-js");
navList.classList.remove("main-nav__list--no-js");

navToggle.addEventListener("click", function () {
  navList.classList.toggle("main-nav__list--close");
  navToggle.classList.toggle("main-nav__toggle--close");
});
