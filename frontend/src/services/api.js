import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, //this shit this base url ok
});

export default api;
