import axios from "axios";

const API = axios.create({
    baseURL: "http://13.205.16.136:5000/api"
});

export default API;