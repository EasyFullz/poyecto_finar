
export const cardCarrusel = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const cardContainer = document.querySelector('.card-container');
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev'); 
      
        // Considerando el ancho de la tarjeta y el gap
        const cardWidth = 16; // Ancho de la tarjeta (rem)
        const gap = 2; // Espacio entre tarjetas (rem)
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
}

