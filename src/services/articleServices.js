import axiosWithAuth from "../utils/axiosWithAuth";
import { axiosDel } from "../utils/axiosWithAuth";
import { axiosGet } from "../utils/axiosWithAuth";
import { axiosPut } from "../utils/axiosWithAuth";
import { axiosPost } from "../utils/axiosWithAuth";
const articleService = () => {
  return axiosWithAuth("http://localhost:5000/api/articles");
};

export default articleService;

export const handDelete = (id) => {
  return axiosDel(`http://localhost:5000/api/articles/${id}`);
};

export const getArticle = (id) => {
  return axiosGet(`http://localhost:5000/api/articles/${id}`);
};

export const updateArticle = (id) => {
  return axiosPut(`http://localhost:5000/api/articles/${id}`);
};

export const logArticleOut = () => {
  return axiosPost(`http://localhost:5000/api/logout`);
};
//Task List:
//1. Complete articleServices. This module should make an authenticated call
//and return an array of those articles.
