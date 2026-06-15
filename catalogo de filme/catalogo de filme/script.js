// Banco de dados de filmes
const movies = [
    {
        id: 1,
        title: "O Poderoso Chefão",
        year: 1972,
        genre: "Drama",
        rating: "★★★★★",
        poster: "https://via.placeholder.com/300x400/333/fff?text=O+Poderoso+Chefão"
    },
    {
        id: 2,
        title: "A Origem",
        year: 2010,
        genre: "Ficção",
        rating: "★★★★★",
        poster: "C:\Users\LIMEIRA-PAULOCHAVESP\Desktop\posters\download.jpg"
    },
    {
        id: 3,
        title: "Matrix",
        year: 1999,
        genre: "Ficção",
        rating: "★★★★½",
        poster: "https://via.placeholder.com/300x400/333/fff?text=Matrix"
    },
    {
        id: 4,
        title: "Vingadores: Ultimato",
        year: 2019,
        genre: "Ação",
        rating: "★★★★½",
        poster: "https://via.placeholder.com/300x400/333/fff?text=Vingadores"
    },
    {
        id: 5,
        title: "As Branquelas",
        year: 2004,
        genre: "Comédia",
        rating: "★★★★☆",
        poster: "https://via.placeholder.com/300x400/333/fff?text=As+Branquelas"
    },
    {
        id: 6,
        title: "Invocaçao do Mal",
        year: 2013,
        genre: "Terror",
        rating: "★★★★☆",
        poster: "https://via.placeholder.com/300x400/333/fff?text=Invocação+do+Mal"
    },
    {
        id: 7,
        title: "Clube da Luta",
        year: 1999,
        genre: "Drama",
        rating: "★★★★★",
        poster: "https://via.placeholder.com/300x400/333/fff?text=Clube+da+Luta"
    },
    {
        id: 8,
        title: "Deadpool",
        year: 2016,
        genre: "Comédia",
        rating: "★★★★½",
        poster: "https://via.placeholder.com/300x400/333/fff?text=Deadpool"
    },
    {
        id: 9,
        title: "Interestelar",
        year: 2014,
        genre: "Ficção",
        rating: "★★★★★",
        poster: "https://via.placeholder.com/300x400/333/fff?text=Interestelar"
    },
    {
        id: 10,
        title: "John Wick",
        year: 2014,
        genre: "Ação",
        rating: "★★★★½",
        poster: "https://via.placeholder.com/300x400/333/fff?text=John+Wick"
    }
];

let currentMovies = [...movies];
let currentGenre = "todos";
let currentSearch = "";

// Função para renderizar os filmes na tela
function renderMovies() {
    const moviesGrid = document.getElementById("moviesGrid");
    
    if (currentMovies.length === 0) {
        moviesGrid.innerHTML = '<div class="no-results">🎬 Nenhum filme encontrado!</div>';
        return;
    }

    moviesGrid.innerHTML = currentMovies.map(movie => `
        <div class="movie-card">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-year">📅 ${movie.year}</div>
                <div class="movie-genre">🎭 ${movie.genre}</div>
                <div class="movie-rating">⭐ ${movie.rating}</div>
            </div>
        </div>
    `).join("");
}

// Função para filtrar filmes
function filterMovies() {
    let filtered = [...movies];
    
    // Filtrar por gênero
    if (currentGenre !== "todos") {
        filtered = filtered.filter(movie => movie.genre === currentGenre);
    }
    
    // Filtrar por busca
    if (currentSearch !== "") {
        filtered = filtered.filter(movie => 
            movie.title.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }
    
    currentMovies = filtered;
    renderMovies();
}

// Função de busca
function searchMovies() {
    const searchInput = document.getElementById("searchInput");
    currentSearch = searchInput.value;
    filterMovies();
}

// Função para filtrar por gênero
function filterByGenre(genre) {
    currentGenre = genre;
    currentSearch = document.getElementById("searchInput").value;
    
    // Atualizar estilo dos botões
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent === "Todos" && genre === "todos") {
            btn.classList.add("active");
        } else if (btn.textContent === genre) {
            btn.classList.add("active");
        }
    });
    
    filterMovies();
}

// Adicionar evento de pesquisa ao pressionar Enter
document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchMovies();
    }
});

// Renderizar filmes ao carregar a página
renderMovies();
