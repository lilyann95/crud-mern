import React, { useEffect, useState } from "react";
import { getBooks } from "../../api/books";
import TableRow from "../components/TableRow";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [sortedBooks, setSortedBooks] = useState([]);

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
                <TableRow key={book._id} book={book} count={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookList;
