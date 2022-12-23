let menu = document.querySelector(".menu-btn");
let navbar = document.querySelector("nav ul");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
