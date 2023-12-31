import axios from "axios"
/*Create instance of axios*/
const axiosInstance = axios.create({
    baseURL: `https://newsapi.org/v2`
})


export const API = {
    getHeadlines: async () => {
        const response = await axiosInstance.get(`top-headlines/sources?apiKey=7c94c4bf82af4e18a0ba534482945782`);
        return response.data ?? []
    },
    getFilteredHeadlines: async (userInput) => {
        const response = await axiosInstance.get(`top-headlines/sources?country=${userInput}&apiKey=7c94c4bf82af4e18a0ba534482945782`);
        return response?.data ?? [];
    }
}