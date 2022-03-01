import { ip } from "./local_ip";

const baseURL = "http://" + ip + ":8080/genres"

export const getAllGenres = () => {
    return fetch(baseURL)
    .then((res) => res.json())
}