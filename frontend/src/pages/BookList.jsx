import React from "react";

const BookList = () => {
  return (
    <div className="px-4">
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          {/* Books Sort */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="year">Sort by: Year</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map books */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"></div>
      </div>
    </div>
  );
};

export default BookList;
