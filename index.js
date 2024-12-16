// Función que permite filtrar productos en base al texto de búsqueda
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box'); // Barra de búsqueda
    const productCards = document.querySelectorAll('.product-card'); // Cuadrículas de productos

    // Evento que escucha los cambios en la barra de búsqueda
    searchBox.addEventListener('input', () => {
        const query = searchBox.value.toLowerCase(); // Obtiene el texto de búsqueda y lo convierte a minúsculas

        productCards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase(); // Obtiene el título de cada producto
            const description = card.querySelector('p').textContent.toLowerCase(); // Obtiene la descripción de cada producto

            // Si el título o la descripción contienen el texto de búsqueda, muestra la tarjeta, sino la oculta
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
