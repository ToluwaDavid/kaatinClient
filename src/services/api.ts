import axios from "axios";

const api = axios.create({
  // baseURL: "https://kaatinserver-production.up.railway.app/api",
  baseURL: "https://kaatinserver.onrender.com/api",
  withCredentials: true,
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
