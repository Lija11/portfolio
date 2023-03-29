import React from "react";
import { Link as A } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="text-primary">
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
            {/* <Link
              // activeClass="active"
              to="home"
              // spy={true}
              smooth={true}
              offset={500}
              duration={500}
              // onSetActive={this.handleSetActive}
              className="px-4"
            >
              Home
            </Link> */}
            <Link
              // activeClass="active"
              to="homepage"
              // spy={true}
              smooth={true}
              offset={1}
              duration={500}
              // onSetActive={this.handleSetActive}
              className="px-4"
            >
              Home
            </Link>
            <Link
              // activeClass="active"
              to="services"
              // spy={true}
              smooth={true}
              offset={1}
              duration={500}
              // onSetActive={this.handleSetActive}
              className="px-4"
            >
              Service
            </Link>
            <Link
              // activeClass="active"
              to="portfolio"
              // spy={true}
              smooth={true}
              offset={1}
              duration={500}
              // onSetActive={this.handleSetActive}
              className="px-4"
            >
              Portfolio
            </Link>

            <Link
              // activeClass="active"
              to="resume"
              // spy={true}
              smooth={true}
              offset={10}
              duration={500}
              // onSetActive={this.handleSetActive}
              className="px-4"
            >
              Resume
            </Link>
            <Link
              // activeClass="active"
              to="about"
              // spy={true}
              smooth={true}
              offset={10}
              duration={500}
              // onSetActive={this.handleSetActive}
              className="px-4"
            >
              About Me
            </Link>

            {/* <Link
              // activeClass="active"
              to="/blog"
              // spy={true}
              smooth={true}
              offset={10}
              duration={500}
              // onSetActive={this.handleSetActive}
              className="px-4"
            >
              Blogs
            </Link> */}
            {/* <div className="links">
              <A to="/blog" className="px-4">
                <Link
                  // activeClass="active"
                  to="blog"
                  // spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  // onSetActive={this.handleSetActive}
                  className="px-4"
                >
                  Blogs
                </Link>
              </A>
            </div> */}
            <Link
              // activeClass="active"
              to="contact"
              // spy={true}
              smooth={true}
              offset={10}
              duration={500}
              // onSetActive={this.handleSetActive}
              className="px-4"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="menu w-full flex py-2 justify-end menu-horizontal p-0">
            <Link
              to="/#home"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="px-4"
            >
              Home
            </Link>
            <Link smooth to="#services" className="px-4">
              Service
            </Link>
            <Link smooth to="#portfolio" className="px-4">
              Portfolio
            </Link>
            <Link smooth to="#resume" className="px-4">
              Resume
            </Link>
            <Link smooth to="#about" className="px-4">
              About Me
            </Link>
            <Link smooth to="#blog" className="px-4">
              Blogs
            </Link>
            <Link smooth to="#contact" className="px-4">
              Contact Me
            </Link>
          </div> */}
    </div>
  );
};

export default Navbar;
