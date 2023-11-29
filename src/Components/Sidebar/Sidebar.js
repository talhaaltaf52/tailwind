import React, { useState } from "react";

// Assets
import Control from "../../Assets/control.png";
import Logo from "../../Assets/logo.png";

// Icons
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { RiTeamLine } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

// Components
import Header from "../Header/Header";
import MainCarousel from "../MainCarousel/MainCarousel";
import ColumnOne from "../ColumnOne/ColumnOne";
import ColumnTwo from "../ColumnTwo/ColumnTwo";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", icon: <AiOutlineHome /> },
    { title: "About", icon: <FcAbout /> },
    { title: "Our Team", icon: <RiTeamLine /> },
    { title: "Project", icon: <AiOutlineProject /> },
    { title: "Blog", icon: <FaBloggerB /> },
    { title: "Contact", icon: <TiContacts /> },
  ];

  return (
    <>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20"
          } duration-300 pt-5 bg-dark-blue relative`}
        >
          <img
            src={Control}
            className={`absolute cursor-pointer rounded-full
                    -right-3 top-9 w-7 border-2 border-dark-blue ${
                      !open && "rotate-180"
                    } `}
            onClick={() => setOpen(!open)}
          />
          <div className="flex items-center relative">
            <img
              src={Logo}
              className={`cursor-pointer duration-500 w-[150px] ${
                open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={` text-white text-x duration-300 font-bold absolute top-3 left-[120px] uppercase ${
                !open && "scale-0"
              } `}
            >
              home builder
            </h1>
          </div>
          <div>
            <ul>
              {Menus.map((menu, index) => (
                <li
                  key={index}
                  className="text-white flex item-center
                                gap-x-4 cursor-pointer p-5 hover:bg-yellow rounded-md"
                >
                  <span className={`${!open && "text-[30px]"} text-[22px]`}>
                    {menu.icon}
                  </span>
                  <span
                    className={`${!open && "hidden"} font-bold duration-200`}
                  >
                    {menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 h-screen">
          <Header />
          <MainCarousel />
          <ColumnOne />
          <ColumnTwo />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
