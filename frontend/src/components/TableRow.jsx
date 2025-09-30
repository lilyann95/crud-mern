import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteBook } from "../../api/books";
import SnackBar from "./SnackBar";
import EditBook from "./EditBook";

const TableRow = ({ book, count }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [editBook, setEditBook] = useState({});
  const [snackBar, setSnackBar] = useState({ message: "", open: false });

  const handleOpenDialog = (book) => {
    setOpenDialog(true);
    setEditBook(book);
  };

  const handleDeleteBook = async (id) => {
    try {
      const deletedBook = await deleteBook(id);
      if (!deletedBook) {
        setSnackBar({ message: "Failed to delete the book", open: true });
      } else {
        setSnackBar({ message: "Book deleted successfully", open: true });
      }
    } catch (error) {
      throw new Error(`Error deleting the book: ${error}`);
    }
  };

  return (
    <>
      {openDialog && (
        <EditBook
          book={editBook}
          openDialog={openDialog}
          onClose={() => setOpenDialog(false)}
        />
      )}
      <SnackBar
        message={snackBar.message}
        open={snackBar.open}
        onClose={() => setSnackBar({ ...snackBar, open: false })}
      />
      <tr key={book._id} className="hover:bg-gray-50">
        <td className="border-b px-4 py-2">{count}</td>
        <td className="border-b px-4 py-2">{book.title}</td>
        <td className="border-b px-4 py-2">{book.author}</td>
        <td className="border-b px-4 py-2">{book.year}</td>
        <td className="border-b px-4 py-2">{book.description}</td>
        <td className="border-b px-4 py-2 gap-5">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="text-blue-500 cursor-pointer mr-3"
            onClick={() => handleOpenDialog(book)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="text-red-500 cursor-pointer"
            onClick={() => handleDeleteBook(book._id)}
          />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
