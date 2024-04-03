
import { menuFuncionalidad } from './scripts/header.js';

// Ejecutar la funcionalidad del menú
menuFuncionalidad();


//codigo para filtro

import { inicializarFiltroAvanzado, inicializarFiltros, inicializarRango } from './scripts/advancedFilter.js';

document.addEventListener('DOMContentLoaded', () => {
  inicializarFiltroAvanzado();
  inicializarFiltros();
  inicializarRango();
});

import { inicializarSearch } from './scripts/search.js';

inicializarSearch();

document.addEventListener("DOMContentLoaded", function() {
  const cardContainer = document.querySelector('.card-container');
  const nextButton = document.querySelector('.next'); // Asegúrate de tener este botón en tu HTML
  const prevButton = document.querySelector('.prev'); // Asegúrate de tener este botón en tu HTML

  // Considerando el ancho de la tarjeta y el gap
  const cardWidth = 20; // Ancho de la tarjeta (rem)
  const gap = 5; // Espacio entre tarjetas (rem)
  const scrollAmount = cardWidth + gap; // Ajustar si es necesario

  // Convertir rem a px para el desplazamiento
  const scrollAmountPx = scrollAmount * parseFloat(getComputedStyle(document.documentElement).fontSize);

  nextButton.addEventListener('click', function() {
      cardContainer.scrollBy({ left: scrollAmountPx, behavior: 'smooth' });
  });

  prevButton.addEventListener('click', function() {
      cardContainer.scrollBy({ left: -scrollAmountPx, behavior: 'smooth' });
  });
});








    