import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { getLoggedInUser } from "../../api/LoggedInUser";
import { BookContext } from "../context/BookContext";

const NavBar = () => {
  const { setShowSearch, location } = useContext(BookContext);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({});

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const loggedUser = await getLoggedInUser();
      setUser(loggedUser);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-between bg-gray-400 mb-5 py-3 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <h1 className="font-extrabold italic tracking-tighter text-xl">
        BOOK MANAGER.
      </h1>
      <ul className="flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-lg font-medium hover:text-[#FF1493]">Home</p>
        </NavLink>
        <NavLink to="/books" className="flex flex-col items-center gap-1">
          <p className="text-lg font-medium hover:text-[#FF1493]">Books</p>
        </NavLink>
        <NavLink to="/add-book" className="flex flex-col items-center gap-1">
          <p className="text-lg font-medium hover:text-[#FF1493]">Add-Book</p>
        </NavLink>
      </ul>
      <div className="hidden sm:flex items-center gap-3">
        {location.pathname === "/books" && (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        )}
        <div className="group relative">
          <img
            src={assets.book4}
            alt="User-image"
            className="flex w-10 h-10 rounded-3xl cursor-pointer"
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-30 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <Link to={"/profile"}>
                <p className="cursor-pointer hover:text-black">My Profile</p>
              </Link>
              <Link to={"login"}>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* <img
          src={assets.book4}
          alt="User-image"
          className="flex w-10 h-10 rounded-3xl cursor-pointer"
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        /> */}

        {user && <p className="text-base font-medium">{user.userName}</p>}
      </div>
      <div className="sm:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="w-5 cursor-pointer"
          onClick={() => setVisible(true)}
        />
      </div>
      {/* Show Logout */}
      {/* {showLogout && (
        <div className="relative p-5 border">
          <Link to="/login">
            <p>Logout</p>
          </Link>
        </div>
      )} */}
      {/* show Menu items */}
      {visible ? <div></div> : null}
    </div>
  );
};

export default NavBar;
