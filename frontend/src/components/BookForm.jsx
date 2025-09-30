import React, { useState } from "react";
import { addBook } from "../../api/books";
import { useNavigate } from "react-router-dom";
import SnackBar from "./SnackBar";

const BookForm = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
  });
  const [snackBar, setSnackBar] = useState({ message: "", open: false });
  const navigate = useNavigate();

  const handleAddBook = async (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.year || !form.description) return;

    const book = {
      title: form.title,
      author: form.author,
      year: form.year,
      description: form.description,
    };

    try {
      const savedBook = await addBook(book);
      if (savedBook) {
        setSnackBar({ open: true, message: "Book stored successfully" });
        setForm({ title: "", author: "", year: "", description: "" });

        setTimeout(() => {
          navigate("/books");
        }, 2000);
      } else {
        setSnackBar({ message: "Failed to store the book", open: true });
      }
    } catch (error) {
      setSnackBar({ message: `Error storing the book", ${error}`, open: true });
    }
  };

  return (
    <>
      <form
        className="border rounded-3xl w-full md:w-[70%] lg:w-[60%] mx-auto mt-5 py-8 px-14"
        onSubmit={handleAddBook}
      >
        <div className="flex flex-col items-start justify-center my-2">
          <h1 className="text-lg font-medium opacity-75">Book title</h1>
          <input
            type="text"
            className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
            placeholder="Enter Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col items-start justify-center my-2">
          <h1 className="text-lg font-medium opacity-75">Book author</h1>
          <input
            type="text"
            className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
            placeholder="Enter Author"
            value={form.author}
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
            value={form.year}
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
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>
        <div className="grid grid-cols justify-items-end">
          <button
            type="submit"
            className="my-2 px-4 py-3 border rounded-xl bg-white hover:bg-black hover:text-white transition-all duration-500 text-black cursor-pointer"
          >
            Add Book
          </button>
        </div>
      </form>
      <SnackBar
        message={snackBar.message}
        open={snackBar.open}
        onClose={() => setSnackBar({ ...snackBar, open: false })}
      />
    </>
  );
};

export default BookForm;
