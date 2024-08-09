 const api_key = 'paste-your-api-key here';
document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('search').value;
    if (query) {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=${api_key}`)
            .then(response => response.json())
            .then(data => {
                const results = document.getElementById('results');
                results.innerHTML = '';
                if (data.Response === 'True') {
                    data.Search.forEach(movie => {
                        const movieElement = document.createElement('div');
                        movieElement.className = 'movie';
                        movieElement.innerHTML = `
                            <img src="${movie.Poster}" alt="${movie.Title}">
                            <h2>${movie.Title}</h2>
                            <p>${movie.Year}</p>
                        `;
                        results.appendChild(movieElement);
                    });
                } else {
                    results.innerHTML = `<p>No results found</p>`;
                }
            })
            .catch(error => console.error('Error:', error));
    }
});
