import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BookContext } from "../context/BookContext";

const SearchBar = ({ onSearch }) => {
  const { showSearch } = useContext(BookContext);
  const [search, setSearch] = useState("");
  const handleSearch = (searchValue) => {
    console.log(searchValue);
    if (searchValue.trim() === "") return;
    onSearch(searchValue.trim());
  };
  return (
    <>
      {showSearch && (
        <div className="flex items-center justify-between my-10">
          <div className="inline-flex items-center justify-between mx-auto w-2/3 border border-gray-500 px-3 py-2 rounded-3xl">
            <input
              type="text"
              placeholder="Search"
              value={search}
              className="flex outline-none bg-inherit w-3/4"
              onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-4 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
