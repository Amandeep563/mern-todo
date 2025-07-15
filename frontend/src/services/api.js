import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", //this shit this base url ok
});

export default api;
