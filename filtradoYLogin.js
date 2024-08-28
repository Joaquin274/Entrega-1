function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        let genre = this.getAttribute('data-genre');
        filterAnimes(genre);
    });
});

function filterAnimes() {
    let selectedGenres = Array.from(document.querySelectorAll('.dropdown-content input:checked')).map(checkbox => checkbox.getAttribute('data-genre'));
    document.querySelectorAll('.anime-card').forEach(card => {
        if (selectedGenres.length === 0 || selectedGenres.includes(card.getAttribute('data-genre'))) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('login-btn').addEventListener('click', function() {
    let username = prompt("Ingrese su nombre de usuario:");
    if (username) {
        localStorage.setItem('username', username);
        actualizarUsuario(username);
    }
});

function actualizarUsuario(username) {
    let loginBtns = document.querySelectorAll('#login-btn');
    loginBtns.forEach(btn => {
        btn.textContent = username;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let username = localStorage.getItem('username');
    if (username) {
        actualizarUsuario(username);
    }
});