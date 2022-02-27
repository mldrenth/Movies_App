
import { ip } from "./local_ip";

const baseURL = "http://" + ip + ":8080/users"

export const getUserData = () => {
    return fetch(baseURL + "/1")
    .then((res) => res.json())
}

export const addMovieToFavourites = (movie) => {
    return fetch(baseURL + "/1/favourites", {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

export const addMovieToWatchlist = (movie) => {
    return fetch(baseURL + "/1/watchlist", {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

export const updateUser = (user) => {
    return fetch(baseURL + "/1", {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}

export const loginUser = (email, password) => {
    return fetch(baseURL + "/login?email=" + email + "&password=" + password, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // .then(res => {if( res ) {res.json()} else {return "Incorrect details"} })
    // .then(res => console.log("I am response", res))
    .then(res => res.json()) // backend comes with string null make it to be an object
}

export const removeMovieFromWatchlist = (movieId) => {
    
    return fetch(baseURL + "/1/watchlist/" + movieId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })   
}

export const removieMovieFromFavourites = (movieId) => {

    return fetch(baseURL + "/1/favourites/" + movieId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}