const toggle = document.querySelector(".main-nav__toggle"),
list = document.querySelector(".main-nav__list");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (toggle.classList.contains("main-nav__toggle--active")) {
    toggle.classList.remove("main-nav__toggle--active");
    toggle.classList.add("main-nav__toggle--close");
    list.classList.remove("main-nav__list--active");
  }
  else {
    toggle.classList.add("main-nav__toggle--active");
    toggle.classList.remove("main-nav__toggle--close");
    list.classList.add("main-nav__list--active");
  }
});
