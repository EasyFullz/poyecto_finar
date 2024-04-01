export const inicializarSearch = () => {
    function search(inputElement, containerList, containerSelector, topSelector, classActive1, classActive2, classActive3) {
        // Obtener elementos del DOM
        const input = document.getElementById(inputElement);
        const container = document.querySelector(containerSelector);
        const topElement = document.querySelector(topSelector);
    
        // Event listener para el contenedor principal
        container.addEventListener('click', function () {
            // Si existe un contenedor de lista
            if (containerList) {
                const list = document.querySelector(containerList);
                // Alternar clase activa para la lista
                list.classList.toggle(`${classActive3}_active`);
            }
    
            // Verificar si el valor del input está vacío
            if (input.value.trim() === '') {
                // Alternar clase activa para el elemento superior y el contenedor principal
                topElement.classList.toggle(`${classActive1}_active`);
                container.classList.toggle(`${classActive2}_active`);
            } else {
                // Si el input tiene contenido, agregar clases activas a los elementos correspondientes
                topElement.classList.add(`${classActive1}_active`);
                container.classList.add(`${classActive2}_active`);
            }
        });
    
        // Si existe un contenedor de lista
        if (containerList) {
            const list = document.querySelector(containerList);
            // Event listener para la lista
            list.addEventListener('click', function (event) {
                // Si se hace clic en un elemento de la lista (<li>)
                if (event.target.tagName === "LI") {
                    // Establecer el valor del input como el texto del elemento de la lista seleccionado
                    input.value = event.target.textContent;
                }
            });
        }
    
        // Event listener global para cerrar el contenedor si se hace clic fuera de él
        document.addEventListener('click', function (event) {
            // Si el clic no ocurre dentro del contenedor y no es el input
            if (!container.contains(event.target) && event.target !== input) {
                // Si existe un contenedor de lista
                if (containerList) {
                    const list = document.querySelector(containerList);
                    // Remover clase activa para la lista
                    list.classList.remove(`${classActive3}_active`);
                }
                // Si el valor del input está vacío, remover clases activas para el elemento superior y el contenedor principal
                if (input.value.trim() === '') {
                    topElement.classList.remove(`${classActive1}_active`);
                    container.classList.remove(`${classActive2}_active`);
                }
            }
        });
    }
    
    search ('inmueble' , '#list_inmueble' , '#inmueble' , '#label_inmueble' , 'label' , 'input_select' , 'list_select');
    search ('barrio' , '#list_barrio' , '#barrio' , '#label_barrio' , 'label' , 'input_select' , 'list_select');
    search ('minimo' , null , '#minimo' , '#label_min' , 'label' , 'input_select' , null);
    search ('maximo' , null , '#maximo' , '#label_max' , 'label' , 'input_select' , null);
}