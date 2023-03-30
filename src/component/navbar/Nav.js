import React from "react";
import Navbar from "./Navbar";
import BottomNavbar from "../navbar/BottomNavbar";

const Nav = () => {
  return (
    <>
      <div className=" active z-50">
        <Navbar />
      </div>
      {/* <BottomNavbar /> */}
    </>
  );
};

export default Nav;
