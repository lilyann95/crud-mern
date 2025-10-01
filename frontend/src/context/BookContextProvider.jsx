import { useState } from "react";
import { BookContext } from "./BookContext";

const BookContextProvider = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    showSearch,
    setShowSearch,
  };
  return (
    <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
