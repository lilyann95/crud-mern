import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between bg-gray-400 mb-5 py-3 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <h1 className="font-extrabold italic tracking-tighter text-xl">
        BOOK MANAGER.
      </h1>
      <ul className="flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-lg font-medium hover:text-[#FF1493]">Home</p>
        </NavLink>
        <NavLink to="/book-list" className="flex flex-col items-center gap-1">
          <p className="text-lg font-medium hover:text-[#FF1493]">Books</p>
        </NavLink>
        <NavLink to="/add-book" className="flex flex-col items-center gap-1">
          <p className="text-lg font-medium hover:text-[#FF1493]">Add-Book</p>
        </NavLink>
      </ul>
      <div className="hidden sm:flex items-center gap-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
        <img
          src={assets.book4}
          alt="User-image"
          className="flex w-10 h-10 rounded-3xl cursor-pointer"
        />
        <p className="text-base font-medium">Lyn</p>
      </div>
      <div className="sm:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="w-5 cursor-pointer"
          onClick={() => setVisible(true)}
        />
      </div>
    </div>
  );
};

export default NavBar;
