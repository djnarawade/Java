$(document).ready(function() {
    const apiKey = 'dd09c3982e2878d21338b29927368bb9'; 
    const baseUrl = 'https://api.themoviedb.org/3';
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; 
    // Handle the search form submit
    $('#search-form').submit(function(event) {
        event.preventDefault();
        const query = $('#search-query').val();

        if (query) {
            fetchMovies(query);
        }
    });

    // Function to fetch movies from TMDb API
    function fetchMovies(query) {
        $.ajax({
            url: `${baseUrl}/search/movie`,
            method: 'GET',
            data: {
                api_key: apiKey,
                query: query
            },
            success: function(response) {
                displayMovies(response.results);
            },
            error: function(error) {
                console.log('Error fetching data:', error);
            }
        });
    }

    // Function to display movie results
    function displayMovies(movies) {
        $('#movie-results').empty();

        if (movies.length === 0) {
            $('#movie-results').append('<p class="text-center">No results found. Try searching for something else!</p>');
        } else {
            movies.forEach(movie => {
                const movieCard = `
                    <div class="col-md-3">
                        <div class="card">
                            <img src="${imageBaseUrl}${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                            <div class="card-body">
                                <h5 class="card-title">${movie.title}</h5>
                                <p class="card-text">${movie.overview}</p>
                            </div>
                        </div>
                    </div>
                `;
                $('#movie-results').append(movieCard);
            });
        }
    }
});
