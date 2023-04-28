import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-api.onrender.com",
});

export default instance;
