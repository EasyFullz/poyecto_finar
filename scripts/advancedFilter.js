
export const inicializarFiltroAvanzado = () => {
    // Selecciona todos los elementos con la clase ".listZona"
    const listZone = document.querySelectorAll(".listZona");
    // Selecciona todos los elementos con la clase ".zonaInput"
    const inputZone = document.querySelectorAll(".zonaInput");
  
    // Verifica que el número de elementos en listZone sea igual al de inputZone
    if (listZone.length === inputZone.length) {
        // Para cada elemento en listZone, agrega un event listener
        listZone.forEach((zone, index) => {
            // Cuando se hace clic en una zona, cambia el estado del input correspondiente
            zone.addEventListener('click', function() {
                inputZone[index].checked = !inputZone[index].checked;
            });
        });
    }
  
    // Función para mostrar u ocultar el filtro avanzado
    function FilterAdvanced(button, containerFilter, active) {
        // Selecciona el botón y el contenedor del filtro avanzado
        const buttonFilter = document.querySelector(button);
        const container = document.querySelector(containerFilter);
  
        // Añade un event listener al botón para mostrar u ocultar el filtro al hacer clic
        buttonFilter.addEventListener('click', () => {
            container.classList.toggle(active);
        });
    }
  

    // Inicializa la funcionalidad del filtro avanzado para abrirlo
    FilterAdvanced('.filter', '.advancedFilter', 'advancedFilter_Active');
    // Inicializa la funcionalidad del filtro avanzado para cerrarlo
    FilterAdvanced('.closeFilter', '.advancedFilter', 'advancedFilter_Active');

    function avancedFilter(buttonID, arrowID, buttonClass, arrowClass, containerSelector, inputActive) {
    
            const firstButton = document.getElementById(buttonID);
            const arrowFilter = document.getElementById(arrowID);
            const distanciaInicial = firstButton.offsetLeft;
    
            arrowFilter.style.transform = `translateX(${distanciaInicial}px)`;  
        
    
            const buttons = document.querySelectorAll(buttonClass);
    
        buttons.forEach(boton => {
            boton.addEventListener('mouseover', () => {
                    const arrowFilterClass = boton.parentElement.querySelector(arrowClass);
                    const distancia = boton.offsetLeft;
                    arrowFilterClass.style.transform = `translateX(${distancia}px)`;
            });
    
            boton.addEventListener('click', () => {
                const container = boton.closest(containerSelector); 
                const activeButtons = container.querySelectorAll(`${buttonClass}.${inputActive}`); 
    
                
                activeButtons.forEach(botonActivo => {
                    botonActivo.classList.remove(inputActive);
                });
    
                boton.classList.add(inputActive);
            });
        });
    }
    
    avancedFilter('rangeRooms', 'arrowRooms' , '.cantidad', '.filterArrow' , '.containerRange' , 'cantidadActive');
    avancedFilter('rangeBathRooms', 'arrowBathRooms' , '.cantidad', '.filterArrow' , '.containerRange' , 'cantidadActive');
};


export const inicializarFiltros = () => {
    // Selecciona todos los botones dentro del contenedor con la clase '.bottons'
    const buttons = document.querySelectorAll('.bottons button');
    // Selecciona el contenedor de botones
    const buttonsContainer = document.querySelector('.bottons');
  
    // Para cada botón, agrega un event listener para el clic
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Verifica si el botón actual ya está activo
            const isActive = this.classList.contains('active');
            // Remueve la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            // Si el botón no estaba activo, lo marca como activo
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });
};
  
export const inicializarRango = () => {
    // Selecciona el elemento de rango y el elemento de número asociado
    var rango = document.querySelector('.range');
    var numero = document.querySelector('.valorRange');
  
    // Función para actualizar el valor del rango
    function actualizarRango() {
        // Convierte el valor del número a un entero
        var valorNumero = parseInt(numero.value);
        // Verifica si el valor está dentro del rango permitido (1-4000)
        if (valorNumero >= 1 && valorNumero <= 4000) {
            // Actualiza el valor del rango
            rango.value = valorNumero;
        } else {
            // Muestra un mensaje en la consola si el número no es válido
            console.log('Agregue un numero Valido');
        }
    }
  
    // Función para actualizar el valor del número
    function actualizarNumero() {
        // Actualiza el valor del número con el valor del rango
        numero.value = rango.value;
    }
  
    // Agrega event listener para escuchar cambios en el número y actualizar el rango
    numero.addEventListener('input', actualizarRango);
    // Agrega event listener para escuchar cambios en el rango y actualizar el número
    rango.addEventListener('input', actualizarNumero);   
};

  