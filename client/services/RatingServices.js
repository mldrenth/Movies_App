import { ip } from "./local_ip";

const baseURL = "http://" + ip + ":8080/movieuserratings"

export const getRatingByMovieAndUserId = (movieId, userId) => {
    return fetch(baseURL + "?movieId=" + movieId + "&&userId=" + userId).then((res) => res.text()).then((text) => text.length ? JSON.parse(text) : {})
}

export const addNewRating = (rating) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(rating),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
}