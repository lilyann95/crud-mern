import { useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import { useLocation } from "react-router-dom";

const BookContextProvider = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const value = {
    showSearch,
    setShowSearch,
    location,
  };

  useEffect(() => {
    setShowSearch();
  }, [location.pathname]);
  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
