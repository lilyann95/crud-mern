import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BookContextProvider from "./context/BookContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </BrowserRouter>
);
