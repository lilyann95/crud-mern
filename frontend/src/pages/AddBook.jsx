import React from "react";
import BookForm from "../components/BookForm";

const AddBook = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-center mt-10 mx-auto">
        <h1 className="font-semibold text-2xl">Add Book</h1>
      </div>
      <BookForm type={"add-form"} />
    </div>
  );
};

export default AddBook;
