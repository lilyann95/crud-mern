import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] justify-between gap-5 my-10 mt-40 text-sm">
        <div>
          <h1 className="font-extrabold italic tracking-tighter text-xl mb-5">
            BOOK MANAGER.
          </h1>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            dicta iusto.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+49 1746732551</li>
            <li>nabawesil8@gmail.com</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-5">FIND US ON</h2>
          <div className="flex flex-row items-center justify-start sm:justify-between sm:pr-4">
            <Link to={"https://www.linkedin.com/in/lilian-nabawesi-024a7b215/"}>
              <img
                src={assets.linkedIn}
                alt="linkedIn"
                className="w-10 h-10 rounded-3xl cursor-pointer"
              />
            </Link>
            <img
              src={assets.twitter}
              alt="twitter"
              className="w-10 h-10 rounded-3xl cursor-pointer"
            />
            <img
              src={assets.instagram}
              alt="instagram"
              className="w-10 h-10 rounded-3xl cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@bookstore.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
