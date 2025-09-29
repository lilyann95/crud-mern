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
bookRouter.put("/editBook/:id", editBookById);
bookRouter.delete("/delete/:id", deleteBook);

export default bookRouter;
