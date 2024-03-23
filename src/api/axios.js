import axios from "axios";

const defaultURL = import.meta.env.VITE_REACT_APP_URL_RTDB;
const baseUrl = axios.create({
  baseURL: defaultURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseUrl;
