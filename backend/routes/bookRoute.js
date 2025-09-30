import express from "express";
import {
  addBook,
  editBookById,
  getBookById,
  getBooks,
  deleteBook,
} from "../controllers/booksController.js";

const bookRouter = express.Router();

bookRouter.get("/:id", getBookById);
bookRouter.get("/", getBooks);
bookRouter.post("/addBook", addBook);
bookRouter.put("/:id", editBookById);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
