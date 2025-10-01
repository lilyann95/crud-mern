import express from "express";
import {
  addBook,
  editBookById,
  getBookById,
  getBooks,
  deleteBook,
} from "../controllers/booksController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const bookRouter = express.Router();

bookRouter.get("/:id", authenticateToken, getBookById);
bookRouter.get("/", authenticateToken, getBooks);
bookRouter.post("/addBook", authenticateToken, addBook);
bookRouter.put("/:id", authenticateToken, editBookById);
bookRouter.delete("/:id", authenticateToken, deleteBook);

export default bookRouter;
