import axios from "axios";

// const baseURL = "http://localhost:3008";
const API = axios.create({ baseURL: "http://localhost:3008" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  console.log(req.headers.authorization);
  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);

// import axios from "axios";

// const baseURL = "http://localhost:3008";
// // const API = axios.create({ baseURL: "http://localhost:3008" });
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

// export const fetchPosts = () => axios.get(`${baseURL}/posts`);
// // export const fetchPosts = () => API.get("/posts");
// export const createPost = (newPost) => axios.post(`${baseURL}/posts`, newPost);
// // export const createPost = (newPost) => API.post("/posts", newPost);
// export const likePost = (id) => axios.patch(`${baseURL}/posts/${id}/likePost`);
// // export const likePost = (id, updatedPost) =>
// //   API.patch(`/posts/${is}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${baseURL}/posts/${id}`);
// // export const deletePost = (id) => API.delete(`/posts/${id}`);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${baseURL}/posts/${id}`, updatedPost);

// export const signIn = (formData) =>
//   axios.post(`${baseURL}/user/signin`, formData);
// // export const signIn = (formData) => API.post(`/user/signin`, formData);
// export const signUp = (formData) =>
//   axios.post(`${baseURL}/user/signup`, formData);
// // export const signUp = (formData) => API.post(`/user/signup`, formData);
