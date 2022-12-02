import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_BE_URL
// axios.interceptors.request.use(request =>{
//     return request
// }, error => {
//     console.log(error);
//     return Promise.reject(error)

// })

const api = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  responseType: "json",
});

export default api;
