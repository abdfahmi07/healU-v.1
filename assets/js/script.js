// Dropdown Toggle
let arrowIcon = document.querySelector(".navbar-item a i");
let navbarItem = document.getElementById("about-menu");
let dropdown = document.querySelector(".dropdown");
let aboutMenu = document.querySelector(".dropdown li:nth-child(1)");
let biodataMenu = document.querySelector(".dropdown li:nth-child(2)");

navbarItem.addEventListener("click", function (e) {
  e.preventDefault();
  if (arrowIcon.classList.contains("upArrow")) {
    dropdown.style.display = "none";
    arrowIcon.classList.remove("upArrow");
    arrowIcon.classList.add("downArrow");
  } else {
    dropdown.style.display = "block";
    arrowIcon.classList.add("upArrow");
    arrowIcon.classList.remove("downArrow");
  }
});

aboutMenu.addEventListener("click", function () {
  dropdown.style.display = "none";
});

biodataMenu.addEventListener("click", function () {
  dropdown.style.display = "none";
});

// Navbar Animation When Scrolling
window.onscroll = function () {
  myFunction();
};

let navbar = document.querySelector(".header");
let hero = document.querySelector(".main-content");
let sticky = hero.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
