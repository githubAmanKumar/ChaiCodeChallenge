// Replace with your OMDB API key
const API_KEY = 'paste-your-api-key here';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    fetchMovies(query);
});

function fetchMovies(query) {
    fetch(`${API_URL}${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovies(data.Search);
            } else {
                displayError(data.Error);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayError('An error occurred while fetching data.');
        });
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="${movie.Title}" style="width: 100%; max-width: 150px;">
            <p>Release Year: ${movie.Year}</p>
            <button class="more-info" data-id="${movie.imdbID}">More Info</button>
        `;
        resultsContainer.appendChild(movieElement);
    });

    // Add event listeners for "More Info" buttons
    document.querySelectorAll('.more-info').forEach(button => {
        button.addEventListener('click', function() {
            const imdbID = this.getAttribute('data-id');
            fetchMovieDetails(imdbID);
        });
    });
}


function displayError(message) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `<p class="error">${message}</p>`;
}

const DETAILS_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=`;

function fetchMovieDetails(imdbID) {
    fetch(`${DETAILS_URL}${imdbID}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovieDetails(data);
            } else {
                displayError(data.Error);
            }
        })
        .catch(error => {
            console.error('Error fetching details:', error);
            displayError('An error occurred while fetching details.');
        });
}

function displayMovieDetails(movie) {
    const detailsModal = document.getElementById('details-modal');
    detailsModal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="${movie.Title}" style="width: 100%; max-width: 300px;">
            <p><strong>Year:</strong> ${movie.Year}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
        </div>
    `;
    detailsModal.style.display = 'block';

    // Close modal functionality
    const closeButton = detailsModal.querySelector('.close');
    closeButton.addEventListener('click', () => {
        detailsModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === detailsModal) {
            detailsModal.style.display = 'none';
        }
    });
}

