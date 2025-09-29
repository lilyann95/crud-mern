import React from "react";

const EditBook = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-center mt-10 mx-auto">
        <h1 className="font-semibold text-2xl">Edit Book</h1>
      </div>
      <form className="border rounded-3xl w-full md:w-[70%] lg:w-[60%] mx-auto mt-5 py-8 px-14">
        <div className="flex flex-col items-start justify-center my-2">
          <h1 className="text-lg font-medium opacity-75">Book title</h1>
          <input
            type="text"
            className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="flex flex-col items-start justify-center my-2">
          <h1 className="text-lg font-medium opacity-75">Book author</h1>
          <input
            type="text"
            className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="flex flex-col items-start justify-center my-2">
          <h1 className="text-lg font-medium opacity-75">Year</h1>
          <input
            type="text"
            className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="flex flex-col items-start justify-center my-2">
          <h1 className="text-lg font-medium opacity-75">Description</h1>
          <input
            type="text"
            className="inline-flex w-full mb-3 px-3 py-2 rounded-xl border"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="grid grid-cols justify-items-end">
          <button
            type="submit"
            className="my-2 px-4 py-3 border rounded-xl bg-white hover:bg-black hover:text-white transition-all duration-500 text-black cursor-pointer"
          >
            Edit Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
