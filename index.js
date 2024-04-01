
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








    