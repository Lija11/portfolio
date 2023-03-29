import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavHash = () => {
  return (
    <div className="text-primary active z-50">
      <div className="max-w-7xl mx-auto py-5 flex">
        <div className="navbar-logo w-full lg:w-1/4">
          <div className=" avatar w-full px-4 flex items-center justify-between lg:justify-start">
            <h4 className="text-sm lg:text-lg uppercase font-extrabold font-mono ">
              Lija
            </h4>
          </div>
        </div>

        <div className="navbar-end justify-end hidden w-full lg:flex">
          <div className="menu w-full flex py-2 justify-end menu-horizontal p-0">
            <Link
              to="/landing#homepage"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="px-4"
            >
              Home
            </Link>
            <Link smooth to="/landing#services" className="px-4">
              Service
            </Link>
            <Link smooth to="landing#portfolio" className="px-4">
              Portfolio
            </Link>
            <Link smooth to="landing#resume" className="px-4">
              Resume
            </Link>
            <Link smooth to="/about" className="px-4">
              About Me
            </Link>
            <Link smooth to="/blog" className="px-4">
              Blogs
            </Link>
            <Link smooth to="landing#contact" className="px-4">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHash;
