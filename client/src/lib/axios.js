import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.MODE !== "development"
      ? import.meta.env.VITE_DEVELOPMENT_URL
      : import.meta.env.VITE_PRODUCTION_URL,
  withCredentials: true,
});
