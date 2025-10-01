import React from "react";
import { assets } from "../assets/assets";

const AboutMe = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-15 gap-12">
      <div className="w-full sm:w-2/3">
        <h1 className="font-extrabold text-5xl text-[#ff00ff]">Hello</h1>
        <h2 className="font-extrabold text-5xl leading-normal">I'm Lyn</h2>
        <p className="font-normal text-base text-gray-400">
          Welcome to my book store application.
        </p>
        <p className="font-normal text-base text-gray-400">
          Let's read together
        </p>
      </div>
      <div className="w-full sm:w-[70%]">
        <img src={assets.book3} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default AboutMe;
