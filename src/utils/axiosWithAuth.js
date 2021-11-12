import axios from "axios";

const axiosWithAuth = (endpoint) => {
  return axios.get(endpoint, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export default axiosWithAuth;

export const axiosDel = (endpoint) => {
  return axios.delete(endpoint, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const axiosGet = (endpoint) => {
  return axios.get(endpoint, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const axiosPut = (endpoint, body) => {
  return axios.put(endpoint, body, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const axiosPost = (endpoint, body) => {
  return axios.post(endpoint, body, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};
//Task List:
//1. Complete axiosWithAuth
