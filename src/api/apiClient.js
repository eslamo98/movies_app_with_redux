import axios from "axios"

export const apiClient = axios.create({
    baseURL: "http://www.omdbapi.com/",
    headers: {
        'Content-Type': 'application/json'
    }
})