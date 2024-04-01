const menuFuncionalidad = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");
  
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");
        navToggle.classList.toggle("nav-toggle_traslate")
  
        if (navMenu.classList.contains("nav-menu_visible")){
            navToggle.setAttribute("aria-label", "Cerrar menú");
        } else {
            navToggle.setAttribute("aria-label", "Abrir menú");
        }
        menuToggle.classList.toggle("menu-toggle_active");
    });
  
    const dropDown1 = document.getElementById("check1");
    const dropDown2 = document.getElementById("check2");
  
    dropDown1.addEventListener('click', function() {
        const subMenu = document.querySelectorAll(".nav-sub-menu");
        subMenu[0].classList.toggle('nav-submenu_visible');
    });
  
    dropDown2.addEventListener('click', function() {
        const subMenu = document.querySelectorAll(".nav-sub-menu");
        subMenu[1].classList.toggle('nav-submenu_visible');
    });
};
  
  // Exportar la función
  export { menuFuncionalidad };
  