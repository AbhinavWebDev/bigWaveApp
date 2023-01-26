import axios from "axios";

const API = axios.create({ baseURL: `https://api.bigwave.in/test_bigwave` });

export const logIn = (formData) => API.post("/api/UserController/login", formData);
export const signUp = (formData) => API.post("/api/UserController/signup", formData);
export const mailVerify = (formData) => API.post("/api/UserController/verify", formData);



