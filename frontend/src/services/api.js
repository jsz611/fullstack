import axios from "axios";

const api = axios.create({
    baseURL: "/api"
})

export default api

//the front end goes to useApi that calls axio and brings the information I want