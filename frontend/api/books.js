import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api/",
});

export const getBook = (id) => API.get(`/books/${id}`);
export const getBooks = () => API.get("/books");
export const addBook = (book) => API.post("/books/addBook", book);
export const updateBook = (id, book) => API.put(`/books/${id}`, book);
export const deleteBook = (id) => API.delete(`/books/${id}`);
