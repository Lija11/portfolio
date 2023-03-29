import React from "react";
import Contact from "./contact/Contact";
import FAQ from "./newResume/FAQ";
import Portfolio from "./portfolio/Portfolio";
import Service from "./service/Service";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Portfolio />
      <FAQ />
      <Contact />

      {/* <NavLink to="/blog" className="px-4">
        Blogs
      </NavLink> */}
    </div>
  );
};

export default Home;
