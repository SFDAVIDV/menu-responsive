const icono = document.getElementById("icono-menu");
const menu = document.getElementById("menu");

icono.addEventListener("click", () => {
  menu.classList.toggle("nav-activo");
  icono.classList.toggle("icono-activo");
});
