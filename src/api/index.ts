import { Api } from "./Api";

export const api = new Api({
    baseURL: import.meta.env.VITE_API_URL + "/rest/v1",
    headers: {
        "apikey": import.meta.env.VITE_API_KEY,
    },
})