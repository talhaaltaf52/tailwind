import React from "react";

// Icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className={`flex justify-between bg-light-white p-4 mx-auto`}>
        <h1 className={`  text-1xl font-bold uppercase text-dark-blue mt-2 `}>
          Home Page
        </h1>
        <ul className={` flex gap-5 mr-20 text-[15px] text-dark-blue`}>
          <li
            className={`border-2 border-gray rounded-[100%] p-2 hover:bg-yellow hover:text-white hover:duration-300 `}
          >
            <FaFacebookF />
          </li>
          <li
            className={`border-2 border-gray rounded-[100%] p-2 hover:bg-yellow hover:text-white hover:duration-300`}
          >
            <FaTwitter />
          </li>
          <li
            className={`border-2 border-gray rounded-[100%] p-2 hover:bg-yellow hover:text-white hover:duration-300`}
          >
            <FaInstagram />
          </li>
          <li
            className={`border-2 border-gray rounded-[100%] p-2 hover:bg-yellow hover:text-white hover:duration-300`}
          >
            <RiBasketballLine />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
