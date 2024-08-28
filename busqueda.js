// Escucha el evento 'Enter' o clic en el botón de búsqueda
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        filtrarContenido();
    }
});

document.getElementById('search-btn').addEventListener('click', filtrarContenido);

// Función para determinar si filtrar episodios o animes
function filtrarContenido() {
    let query = document.getElementById('search-input').value.toLowerCase();
    let path = window.location.pathname;
    if (path.includes("index.html")) {
        filtrarEpisodios(query);
    } else if (path.includes("Directorio.html")) {
        filtrarAnimes(query);
    }
}

// Filtrar episodios en Inicio.html por nombre del anime
function filtrarEpisodios(query) {
    let episodios = document.querySelectorAll('.episodio');
    episodios.forEach(episodio => {
        let anime = episodio.getAttribute('data-anime').toLowerCase();
        if (anime.includes(query)) {
            episodio.style.display = 'block';
        } else {
            episodio.style.display = 'none';
        }
    });
}

// Filtrar animes en Directorio.html por nombre del anime
function filtrarAnimes(query) {
    let animes = document.querySelectorAll('.anime-card');
    animes.forEach(anime => {
        let titulo = anime.querySelector('p').textContent.toLowerCase();
        if (titulo.includes(query)) {
            anime.style.display = 'block';
        } else {
            anime.style.display = 'none';
        }
    });
}