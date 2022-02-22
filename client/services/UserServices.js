import { ip } from "./local_ip";

const baseURL = "http://" + ip + ":8080/users"

export const getUserData = () => {
    return fetch(baseURL + "/1")
    .then((res) => res.json())
}