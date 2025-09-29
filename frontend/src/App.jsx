import { Route, Routes } from "react-router-dom";
import "./index.css";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import BookList from "./pages/BookList";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-details" element={<BookDetails />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/edit-book" element={<EditBook />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
