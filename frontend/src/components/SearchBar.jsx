import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BookContext } from "../context/BookContext";

const SearchBar = () => {
  const { showSearch } = useContext(BookContext);
  return (
    <>
      {showSearch && (
        <div className="flex items-center justify-between my-10">
          <div className="inline-flex items-center justify-between mx-auto w-2/3 border border-gray-500 px-3 py-2 rounded-3xl">
            <input
              type="text"
              placeholder="Search"
              className="flex outline-none bg-inherit"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-4 cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
