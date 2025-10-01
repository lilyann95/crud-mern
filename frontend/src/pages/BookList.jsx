import React, { useContext, useEffect, useState } from "react";
import { getBooks } from "../../api/books";
import TableRow from "../components/TableRow";
import { deleteBook } from "../../api/books";
import SnackBar from "../components/SnackBar";
import EditBook from "../components/EditBook";
import SearchBar from "../components/SearchBar";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [sortedBooks, setSortedBooks] = useState([]);
  const [editBook, setEditBook] = useState({});
  const [snackBar, setSnackBar] = useState({ message: "", open: false });
  const [openDialog, setOpenDialog] = useState(false);
  const { showSearch } = useContext(BookContext);

  const handleOpenDialog = (book) => {
    setOpenDialog(true);
    setEditBook(book);
  };

  const handleUpdateBook = (updatedBook) => {
    setSortedBooks((prev) =>
      prev.map((book) => (book._id === updatedBook._id ? updatedBook : book))
    );
  };

  const handleDeleteBook = async (id) => {
    try {
      const deletedBook = await deleteBook(id);
      if (!deletedBook) {
        setSnackBar({ message: "Failed to delete the book", open: true });
        console.log(sortedBooks);
      } else {
        setSnackBar({ message: "Book deleted successfully", open: true });
        setSortedBooks((prev) => prev.filter((book) => book._id !== id));
      }
    } catch (error) {
      throw new Error(`Error deleting the book: ${error}`);
    }
  };

  const handleChange = (e) => {
    let sortedCopy = books.slice();

    if (e.target.value === "year") {
      sortedCopy = books
        .filter((book) => book.year)
        .sort((a, b) => b.year - a.year);
    } else if (e.target.value === "title") {
      sortedCopy = books
        .filter((book) => book.title)
        .sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
    } else if (e.target.value === "author") {
      sortedCopy = books
        .filter((book) => book.author)
        .sort((a, b) =>
          a.author.toLowerCase().localeCompare(b.author.toLowerCase())
        );
    } else {
      sortedCopy = [...books];
    }

    setSortedBooks(sortedCopy);
  };

  const handleSearch = (search) => {
    let sortedCopy = books.slice();
    if (!search) {
      setSortedBooks(books);
      return;
    }

    const lowerSearch = search.toLowerCase();
    sortedCopy = sortedCopy.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerSearch) ||
        book.author.toLowerCase().includes(lowerSearch) ||
        book.year.toString().includes(lowerSearch) ||
        book.description.toLowerCase().includes(lowerSearch)
    );
    setSortedBooks(sortedCopy);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooks();
        if (!res) return;

        setBooks(res.data.books);
        setSortedBooks(res.data.books);
      } catch (error) {
        throw new Error(`Error fetching books: ${error}`);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      {openDialog && (
        <EditBook
          book={editBook}
          openDialog={openDialog}
          onClose={() => setOpenDialog(false)}
          onUpdateBook={handleUpdateBook}
        />
      )}
      <SnackBar
        message={snackBar.message}
        open={snackBar.open}
        onClose={() => setSnackBar({ ...snackBar, open: false })}
      />
      {showSearch && <SearchBar onSearch={handleSearch} />}

      <div className="">
        <div className="flex-1">
          <div className="flex justify-end text-base sm:text-2xl mb-4">
            {/* Books Sort */}
            <select
              className="border-2 border-gray-400 border-opacity-15 rounded-2xl text-sm px-3 py-2 cursor-pointer"
              onChange={handleChange}
            >
              <option value="">Sort By:</option>
              <option value="year">Sort by: Year</option>
              <option value="title">Sort by: Title</option>
              <option value="author">Sort by: Author</option>
            </select>
          </div>

          {/*Map books */}
          <div className="py-5">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border-b px-4 py-2">No.</th>
                  <th className="border-b px-4 py-2">Title</th>
                  <th className="border-b px-4 py-2">Author</th>
                  <th className="border-b px-4 py-2">Year</th>
                  <th className="border-b px-4 py-2">Description</th>
                  <th className="border-b px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedBooks.map((book, index) => (
                  <TableRow
                    key={book._id}
                    book={book}
                    count={index + 1}
                    onEditBook={handleOpenDialog}
                    onDeleteBook={handleDeleteBook}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookList;
