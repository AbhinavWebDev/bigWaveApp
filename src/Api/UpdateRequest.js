import axios from "axios";

const API = axios.create({ baseURL: `https://api.bigwave.in/test_bigwave` });

API.interceptors.request.use(
  (req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
       
      }`;
      console.log("token",JSON.parse(localStorage.getItem("profile")).token)
    }
    return req;
  },
  (error) => {
    console.log("int error", error);
  }
);

// export const getphotos = (id) => API.get(`/post/getPost`);

export const changeMail = (formData) => API.put("/api/UserController/update_email", formData);
export const sendOTP = (formData) => API.put("/api/UserController/send_code", formData);
export const updatePassword = (formData) => API.put("/api/UserController/forgot_password", formData);
export const passwordResetEmail = (formData) => API.post("/api/UserController/reenter_email", formData);


