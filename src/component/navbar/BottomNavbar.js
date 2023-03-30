import React from "react";
import { AiOutlineHome, AiOutlineFolder, AiOutlineMail } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiSuitcaseLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { FaBloggerB } from "react-icons/fa";
import { HashLink as NavLink } from "react-router-hash-link";
import "./navbar.css";

const BottomNavbar = () => {
  return (
    <div className="block relative lg:hidden z-[1000]">
      <div className="fixed bottom-0 inset-x-0 bottom-navigation rounded-tl-2xl rounded-tr-2xl grid grid-cols-7 text-[10px] px-4 text-white font-light font-poppins">
        <NavLink
          to="/landing#home"
          className="flex flex-col items-center mx-auto px-3 py-3 bottomNav"
        >
          <span className="text-xl">
            <AiOutlineHome />
          </span>
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/landing#services"
          className="flex flex-col items-center mx-auto px-3 py-3 bottomNav"
        >
          <span className="text-xl">
            <BsCodeSlash />
          </span>
          <p>Service</p>
        </NavLink>
        <NavLink
          to="/landing#portfolio"
          className="flex flex-col items-center mx-auto px-3 py-3 bottomNav"
        >
          <span className="text-xl">
            <RiSuitcaseLine />
          </span>
          <p>Portfolio</p>
        </NavLink>
        <NavLink
          to="/landing#resume"
          className="flex flex-col items-center mx-auto px-3 py-3 bottomNav"
        >
          <span className="text-xl">
            <AiOutlineFolder />
          </span>
          <p>Resume</p>
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center mx-auto px-3 py-3 bottomNav"
        >
          <span className="text-xl">
            <IoIosContact />
          </span>
          <p>About</p>
        </NavLink>
        <NavLink
          to="/blog"
          className="flex flex-col items-center mx-auto px-3 py-3 bottomNav"
        >
          <span className="text-xl">
            <FaBloggerB />
          </span>
          <p>Blogs</p>
        </NavLink>
        <NavLink
          to="/landing#contact"
          className="flex flex-col items-center mx-auto px-3 py-3 bottomNav"
        >
          <span className="text-xl">
            <AiOutlineMail />
          </span>
          <p>Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNavbar;
