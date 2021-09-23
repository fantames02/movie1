const OMDB_API_KEY = "d51ee8fa";
const baseApiURL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

// Write an arrow function called getMoviesBySearchTerm that takes a search string as input and uses fetch and async/await to get an array of movies with a matching title from OMDb API.
export const getMoviesBySearchTerm = async (searchTerm) => {
    const searchTermURL = `${baseApiURL}s=${searchTerm}`;
    const response = await fetch(searchTermURL);
    const data = await response.json();

    if (data.Response === "True") {
        return data.Search;
    }

    throw new Error;
};


// getMoviesBySearchTerm("batman").then((movies) => {
//     console.log('Movies found:', movies)
// }).catch((err) => {
//     console.error("whoops, no movies");
// });


// Write another arrow function called getMovieDetailsById that takes a valid OMDb movie id as input and uses fetch and async/await to get an object of detailed information about the specified movie.
export const getMovieDetailsById = async (movieId) => {
    const movieIdURL = `${baseApiURL}i=${movieId}`;
    const response = await fetch(movieIdURL);
    const data = await response.json();

    if (data.Response === "False") {
        throw new Error;
    }

    return data;
};


// getMovieDetailsById("tt0372784").then((movie) => {
//     console.log('Movie found:', movie)
// }).catch((err) => {
//     console.error("whoops, no movie found with that");
// });


// named exports vs default exports