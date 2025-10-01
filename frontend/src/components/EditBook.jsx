import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateBook } from "../../api/books";
import { useState } from "react";
import SnackBar from "./SnackBar";

const EditBook = ({ book, openDialog, onClose, onUpdateBook }) => {
  const [form, setForm] = useState({});
  const [snackBar, setSnackBar] = useState({ message: "", open: false });
  const style = {
    sx: {
      minWidth: "60vw",
      maxWidth: "80vw",
    },
  };

  const handleEditBook = async (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.year || !form.description) return;
    try {
      const newBook = {
        title: form.title,
        author: form.author,
        year: form.year,
        description: form.description,
      };
      const updatedBook = await updateBook(book._id, newBook);

      if (updatedBook) {
        onUpdateBook(updatedBook.data.update);
        setSnackBar({ message: "Book edited successfully", open: true });

        setTimeout(() => {
          onClose();
        }, 1000);
      }
    } catch (error) {
      throw new Error(`Error editing the book: ${error}`);
    }
  };

  useEffect(() => {
    if (book) {
      setForm({
        title: book.title,
        author: book.author,
        year: book.year,
        description: book.description,
      });
    }
  }, [book]);
  return (
    <>
      <SnackBar
        message={snackBar.message}
        open={snackBar.open}
        onClose={() => setSnackBar({ ...snackBar, open: false })}
      />
      <React.Fragment>
        <Dialog open={openDialog} onClose={onClose} PaperProps={style}>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogContent>
            <form onSubmit={(e) => handleEditBook(e)} id="edit-form">
              <div className="flex flex-col items-start justify-center my-2">
                <h1 className="text-lg font-medium opacity-75">Book title</h1>
                <input
                  type="text"
                  className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
                  placeholder="Enter Title"
                  defaultValue={book.title || ""}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-center my-2">
                <h1 className="text-lg font-medium opacity-75">Book author</h1>
                <input
                  type="text"
                  className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
                  placeholder="Enter Title"
                  defaultValue={book.author || ""}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-center my-2">
                <h1 className="text-lg font-medium opacity-75">Year</h1>
                <input
                  type="number"
                  className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
                  placeholder="Enter Year"
                  defaultValue={book.year || ""}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-center my-2">
                <h1 className="text-lg font-medium opacity-75">Description</h1>
                <input
                  type="text"
                  className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
                  placeholder="Enter Description"
                  defaultValue={book.description || ""}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  required
                />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <button
              onClick={onClose}
              className="my-2 px-4 py-3 border rounded-xl bg-white hover:bg-black hover:text-white transition-all duration-500 text-black cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="edit-form"
              className="my-2 px-4 py-3 border rounded-xl bg-white hover:bg-black hover:text-white transition-all duration-500 text-black cursor-pointer"
            >
              Edit Book
            </button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default EditBook;
