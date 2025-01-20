import axios from "axios";

const api = axios.create({
  baseURL: "https://iparts-backend.onrender.com",
});

export default api;
