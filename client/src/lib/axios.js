import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_DEVELOPMENT_URL
      : import.meta.env.VITE_PRODUCTION_URL,
  withCredentials: true,
});

console.log("MODE:", import.meta.MODE);
console.log("ENV:", import.meta.env);
