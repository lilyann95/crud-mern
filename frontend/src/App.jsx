import { Route, Routes } from "react-router-dom";
import "./index.css";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import BookList from "./pages/BookList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
      <RegisterForm />
      {/* <NavBar /> */}
      {/* <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/books" element={<BookList />} />
        </Routes>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
