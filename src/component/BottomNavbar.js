import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  let activeStyle = {
    color: "red",
  };
  return (
    <div className="block relative lg:hidden z-[1000]">
      <div className="fixed bottom-0 inset-x-0 bottom-navigation rounded-tl-2xl rounded-tr-2xl grid grid-cols-7 text-[8px] px-4 text-white font-light font-poppins">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex flex-col items-center mx-auto px-3 py-3"
        >
          <span>
            <AiOutlineHome />
          </span>
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/service"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex flex-col items-center mx-auto px-3 py-3"
        >
          <span>
            <AiOutlineHome />
          </span>
          <p>Service</p>
        </NavLink>
        <NavLink
          to="/portfolio"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex flex-col items-center mx-auto px-3 py-3"
        >
          <span>
            <AiOutlineHome />
          </span>
          <p>Portfolio</p>
        </NavLink>
        <NavLink
          to="/resume"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex flex-col items-center mx-auto px-3 py-3"
        >
          <span>
            <AiOutlineHome />
          </span>
          <p>Resume</p>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex flex-col items-center mx-auto px-3 py-3"
        >
          <span>
            <AiOutlineHome />
          </span>
          <p>About</p>
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex flex-col items-center mx-auto px-3 py-3"
        >
          <span>
            <AiOutlineHome />
          </span>
          <p>Blogs</p>
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex flex-col items-center mx-auto px-3 py-3"
        >
          <span>
            <AiOutlineHome />
          </span>
          <p>Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNavbar;
