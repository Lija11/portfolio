import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./component/Landing";
import Home from "./component/Home";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./component/navbar/Nav";
import Service from "./component/service/Service";
import FAQ from "./component/newResume/FAQ";
import Contact from "./component/contact/Contact";
import Navbar from "./component/navbar/Navbar";
import Portfolio from "./component/portfolio/Portfolio";
import Banner from "./component/banner/Banner";
import Footer from "./component//footer/Footer";
import Blog from "./blog/Blog";
import NavHash from "./component/navbar/NavHash";
import About from "./component/about/About";
import BottomNavbar from "./component/navbar/BottomNavbar";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <NavHash />
        <BottomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Banner />
      <Service />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
      <Home /> */}
    </div>
  );
}

export default App;
