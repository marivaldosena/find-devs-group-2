import axios from "axios";

export const api = axios.create({
  baseURL: "https://finddevsapi.up.railway.app",
});
