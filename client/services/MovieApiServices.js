import {apikey} from './apikey';

const baseURL = "https://api.themoviedb.org/3/"


export const getPopularMovies = () => {
    return fetch(baseURL + "movie/popular?api_key=" + apikey + "&language=en-US&page=1" ).then((res) => res.json());
    
};

export const getTopRatedMovies = () => {
    return fetch(baseURL + "movie/top_rated?api_key=" + apikey + "&language=en-US&page=1").then((res) => res.json());
    
}

export const getUpcomingMovies = () => {
    return fetch(baseURL + "movie/upcoming?api_key=" + apikey + "&language=en-US&page=1").then((res) => res.json());
    
}

export const getVideoKey = (movieId) => {
    return fetch(baseURL + "movie/" + movieId + "/videos?api_key=02afffc72767fe8fcddd021f73d1e6e0&language=en-US").then((res) => res.json())
}

export const getMoviesByName = (searchTerm) => {
    return fetch(baseURL + "search/movie?api_key=" + apikey + "&language=en-US&query=" + searchTerm + "&page=1&include_adult=false" ).then((res) => res.json())
}

export const getRecommendedMovies = (movieId) => {
    return fetch(baseURL + "movie/" + movieId + "/recommendations?api_key=" + apikey + "&language=en-US&page=1").then((res) => res.json())
}