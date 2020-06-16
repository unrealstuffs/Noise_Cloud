const headerMenu = document.querySelector(".header-menu");
const headerMenuToggle = document.querySelector(".header-menu-toggle");

headerMenuToggle.addEventListener("click", () => {
    headerMenu.classList.toggle("show");
});
