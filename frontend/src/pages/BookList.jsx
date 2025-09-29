import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BookList = () => {
  return (
    <div className="px-4">
      <div className="flex-1">
        <div className="flex justify-end text-base sm:text-2xl mb-4">
          {/* Books Sort */}
          <select className="border-2 border-gray-400 border-opacity-15 rounded-2xl text-sm px-3 py-2 cursor-pointer">
            <option value="year">Sort by: Year</option>
            <option value="title">Sort by: Title</option>
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
              <tr className="hover:bg-gray-50">
                <td className="border-b px-4 py-2">Count</td>
                <td className="border-b px-4 py-2">tell</td>
                <td className="border-b px-4 py-2">author</td>
                <td className="border-b px-4 py-2">ddd</td>
                <td className="border-b px-4 py-2">errr</td>
                <td className="border-b px-4 py-2 gap-5">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-blue-500 cursor-pointer mr-3"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-red-500 cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookList;
