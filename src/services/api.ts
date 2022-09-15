import axios from "axios";

export const api = axios.create({
  baseURL: "https://finddev-api.herokuapp.com"
});