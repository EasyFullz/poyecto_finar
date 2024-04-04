
export const deplegarMapa = () => {
    const buttonMap = document.querySelector(".button-map");
    const containerMap = document.querySelector(".container-map");
    const map = document.querySelector(".map");

    buttonMap.addEventListener("click", () => {
        containerMap.classList.toggle("container-map_active");
        map.classList.toggle("map_active");

    })
}