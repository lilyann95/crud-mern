import React from "react";
import assets from "../assets/assets";

const BookDetails = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full mt-20 py-4 px-4 gap-5">
      <img src={assets.book3} alt="author photo" className="w-full" />
      <div className="px-3">
        <h1 className="font-medium text-xl py-3">About The Book</h1>
        <div className="flex items-center justify-between my-3 w-[20%]">
          <img src={assets.book1} alt="" className="w-10 h-10 rounded-3xl" />
          <p className="font-medium text-gray-500 text-base">Author</p>
        </div>
        <div className="flex items-center gap-1 my-3">
          <img src={assets.book2} alt="stars" className="w-5 h-5 rounded-3xl" />
          <img src={assets.book2} alt="stars" className="w-5 h-5 rounded-3xl" />
          <img src={assets.book2} alt="stars" className="w-5 h-5 rounded-3xl" />
          <img src={assets.book2} alt="stars" className="w-5 h-5 rounded-3xl" />
          <img src={assets.book2} alt="stars" className="w-5 h-5 rounded-3xl" />
          <p className="font-medium text-gray-500 text-base px-5">share</p>
        </div>
        <p className="font-medium text-base my-3">
          Year: <span className="text-gray-500">2000</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          deserunt rerum nesciunt laudantium delectus amet sed illum quo!
          Maxime, nobis! Molestias cupiditate facere alias repellendus quam
          nesciunt recusandae corrupti error.
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
