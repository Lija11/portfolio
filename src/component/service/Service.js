import React from "react";
import SectionBorder from "../SectionBorder";

const Service = () => {
  return (
    <div
      id="services"
      className="text-white max-w-7xl mx-auto p-[30px] lg:p-[0]"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="aos-init aos-animate"
      >
        <p className="text-xs lg:text-sm text-secondary uppercase  mb-[13px]">
          Services
        </p>
        <p className="text-accent font-bold text-3xl lg:text-5xl mb-12">
          What I Do
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* <div data-aos="fade-up" data-aos-duration="1500" className="aos-init">
          <div className="service-card text-accent hover:text-white p-8 lg:p-12 ">
            <div className="text-left">
              <p className="text-5xl text-secondary">
                <i className="fa-solid fa-layer-group"></i>
              </p>
              <h2 className="font-semibold text-xl lg:text-2xl my-4">
                Mern Development
              </h2>
              <p className="text-sm lg:text-base">
                I'm a MERN Developer .I can build your full stack website with
                MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern
                Developer
              </p>
            </div>
          </div>
        </div> */}
        <div data-aos="fade-up" data-aos-duration="1500" className="aos-init">
          <div className="service-card text-accent hover:text-white p-8 lg:p-12 ">
            <div className="text-left">
              <p className="text-5xl text-secondary">
                <i className="fa-solid fa-code"></i>
              </p>
              <h2 className="font-semibold text-xl lg:text-2xl my-4">
                Frontend Development
              </h2>
              <p className="text-sm lg:text-base">
                I'm A Frontend specialist. I have created many Website With
                Fancy Frontend. I can be your frontend Engineer.
              </p>
            </div>
          </div>
        </div>
        {/* <div data-aos="fade-up" data-aos-duration="1500" className="aos-init">
          <div className="service-card text-accent hover:text-white p-8 lg:p-12 ">
            <div className="text-left">
              <p className="text-5xl text-secondary">
                <i className="fa-solid fa-server"></i>
              </p>
              <h2 className="font-semibold text-xl lg:text-2xl my-4">
                Backend Development
              </h2>
              <p className="text-sm lg:text-base">
                I'm A Backend Developer. I have created many projects Server
                Side Api Endpoint. I can be your Backend Developer.
              </p>
            </div>
          </div>
        </div> */}
        <div data-aos="fade-up" data-aos-duration="1500" className="aos-init">
          <div className="service-card text-accent hover:text-white p-8 lg:p-12 ">
            <div className="text-left">
              <p className="text-5xl text-secondary">
                <i className="fa-brands fa-react"></i>
              </p>
              <h2 className="font-semibold text-xl lg:text-2xl my-4">
                React Development
              </h2>
              <p className="text-sm lg:text-base">
                I'm A React Developer. I have created many single page
                application using React.JS. I can be your React Developer.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="aos-init">
          <div className="service-card text-accent hover:text-white p-8 lg:p-12 ">
            <div className="text-left">
              <p className="text-5xl text-secondary">
                <i className="fa-brands fa-js-square"></i>
              </p>
              <h2 className="font-semibold text-xl lg:text-2xl my-4">
                Javascript Development
              </h2>
              <p className="text-sm lg:text-base">
                I'm a Javascript Developer. I have created many website using
                Javascript. I can be your Javascript Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionBorder />
    </div>
  );
};

export default Service;
