import axios from "axios";

const instance = axios.create({
  baseURL: "https://site--back-marvel--qjy84vpdjsjt.code.run",
});

export default instance;
