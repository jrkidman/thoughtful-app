import axios from "axios";

const Axios = axios.create({
    baseURL: process.env.REACT_APP_AXIOS === 'development'
        ? 'http://localhost:4000/'
        : '/',
    withCredentials: true,
});

export default Axios;