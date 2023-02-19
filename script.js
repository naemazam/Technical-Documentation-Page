const OpenMenuBtn = document.querySelector("#open-nav-btn");
const CloseMenuBtn = document.querySelector("#close-nav-btn");
const sideMenu = document.querySelector(".navigation");
const navlinks = document.querySelectorAll(".nav-link")

OpenMenuBtn.addEventListener("click", togglenav);
CloseMenuBtn.addEventListener("click", togglenav);

navlinks.forEach((navlink) => {
	navlink.addEventListener("click", togglenav);
});

function togglenav() {
	sideMenu.classList.toggle("menu-show");
  CloseMenuBtn.classList.toggle("show");
}


