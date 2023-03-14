import axios from "axios";

const token = localStorage.getItem("token");
export const instance = axios.create({
  baseURL: "https://training.bks.center/",
  headers: {
    Authorization: "Bearer " + token,
  },
});
