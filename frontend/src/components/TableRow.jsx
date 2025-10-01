import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ book, count, onEditBook, onDeleteBook }) => {
  return (
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
          onClick={() => onEditBook(book)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-500 cursor-pointer"
          onClick={() => onDeleteBook(book._id)}
        />
      </td>
    </tr>
  );
};

export default TableRow;
