import axios from "axios";
const api = axios.create({
    baseURL: `https://mern-bookstore-rcxp.onrender.com`
})
export default api
