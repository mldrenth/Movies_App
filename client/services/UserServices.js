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