import axios from "axios";
import { BASE_URL } from "./endpoints";

let AUTH_TOKEN = "AuthToken";

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem(AUTH_TOKEN, token);
    }
}

const getAuthToken = () => {
    return localStorage.getItem(AUTH_TOKEN);
}

const refreshToken = () => {
    return "";
}

apiClient.interceptors.request.use(function (config) {
    const token = getAuthToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response.status === 401) {
            console.log(error.toJSON());
        }
        else {
            console.log(error.toJSON());
        }

    });