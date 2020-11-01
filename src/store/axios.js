import axios from "axios";

const instance = axios.create({
  baseUrl: "https://wookie.codesubmit.io",
  headers: {
    Authorization: "Bearer Wookie2019",
    "Content-Type": "application/json",
  },
});

export default instance;
