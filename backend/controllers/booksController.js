import bookModel from "../models/bookModel.js";

const addBook = async (req, res) => {
  try {
    const { title, author, year, description } = req.body;

    if (!title) {
      res.status(400).json({ message: "Book information is incomplete" });
      return;
    }
    const newBook = new bookModel({
      title,
      author,
      year,
      description,
    });
    const savedBook = await newBook.save();
    res.status(201).json({ message: "Book saved", book: savedBook });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Can not add the book", error: error.message });
  }
};

const editBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await bookModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      res.status(404).json({ message: "Book not updated" });
      return;
    }
    res
      .status(200)
      .json({ message: "Book updated successfully", update: updatedBook });
  } catch (error) {
    res.status(500).json({
      message: "Server error in editing the book",
      error: error.message,
    });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    if (books.length === 0) {
      res.status(404).json({ message: "No books found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Books fetched successfully", books: books });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error in getting books", error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: "Server error in getting the book",
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await bookModel.deleteOne({ _id: id });
    if (deleteBook.deletedCount !== 1) {
      res.status(404).json({ message: "Failed to delete book" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Server error in deleting the book",
      error: error.message,
    });
  }
};

export { addBook, editBookById, getBookById, getBooks, deleteBook };
