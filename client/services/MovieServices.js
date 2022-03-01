import { ip } from "./local_ip";

const baseURL = "http://" + ip + ":8080/movies"

export const addMovie = (movie) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    
}