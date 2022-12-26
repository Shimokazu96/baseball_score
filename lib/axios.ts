import axios from "axios";

export const axiosApi = axios.create({
    baseURL: process.env.NEXT_APIURL,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    withCredentials: true,
});