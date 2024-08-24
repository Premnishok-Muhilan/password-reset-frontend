import axios from "axios";

// define the base url for the api
const baseURL = "http://localhost:3001/api/v1";

// define the instance
const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
