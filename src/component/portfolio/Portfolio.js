import React from "react";
import SectionBorder from "../SectionBorder";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="text-white max-w-7xl mx-auto p-[30px] lg:p-[0]"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="aos-init aos-animate"
      >
        <p className="text-xs lg:text-sm text-secondary uppercase  mb-[13px]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <p className="text-accent font-bold text-3xl lg:text-5xl mb-10">
          My Full Stack Projects
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="500"
          className="portfolio-card text-accent hover:text-white aos-init aos-animate"
        >
          <div className="text-left">
            <div className="image-content w-full rounded-xl overflow-hidden">
              <picture>
                <img src="images/project.jpg" alt="" loading="lazy" />
              </picture>
            </div>
            <div>
              <h2 className="font-semibold text-sm my-4 text-secondary">
                Forge The Drill
              </h2>
              <h2 className="project-title text-accent font-semibold text-xl my-4">
                Manufacturer Company Web App
                <i className="title-icon text-secondary ml-2 fa-solid fa-arrow-turn-up"></i>
              </h2>
            </div>
            <div className="button-content flex justify-between mt-5">
              {/* <a
                className="project-button text-[10px] lg:text-[12px]"
                href="/project/1"
              >
                <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
                View Details
              </a> */}
              <a
                href="https://inspiring-baklava-be592e.netlify.app/login"
                target="_blank"
                rel="noreferrer"
                className="project-button text-[10px] lg:text-[12px]"
              >
                <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
                View Live
              </a>
            </div>
          </div>
        </div>
        {/* <div
          data-aos="zoom-in-right"
          data-aos-duration="500"
          className="portfolio-card text-accent hover:text-white aos-init"
        >
          <div className="text-left">
            <div className="image-content w-full rounded-xl overflow-hidden">
              <img src="images/project.jpg" alt="" />
            </div>
            <div>
              <h2 className="font-semibold text-sm my-4 text-secondary">
                BagsQ
              </h2>
              <h2 className="project-title text-accent font-semibold text-xl my-4">
                Stock Control And Product Management Website
                <i className="title-icon text-secondary ml-2 fa-solid fa-arrow-turn-up"></i>
              </h2>
            </div>
            <div className="button-content flex justify-between mt-5">
              <a
                className="project-button text-[10px] lg:text-[12px]"
                href="/project/2"
              >
                <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
                View Details
              </a>
              <a
                href="https://bagsq12.web.app/"
                target="_blank"
                rel="noreferrer"
                className="project-button text-[10px] lg:text-[12px]"
              >
                <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
                View Live
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="500"
          className="portfolio-card text-accent hover:text-white aos-init"
        >
          <div className="text-left">
            <div className="image-content w-full rounded-xl overflow-hidden">
              <img src="images/project.jpg" alt="" />
            </div>
            <div>
              <h2 className="font-semibold text-sm my-4 text-secondary">
                Blood Buddies
              </h2>
              <h2 className="project-title text-accent font-semibold text-xl my-4">
                Blood Donation And Blood Receiving site
                <i className="title-icon text-secondary ml-2 fa-solid fa-arrow-turn-up"></i>
              </h2>
            </div>
            <div className="button-content flex justify-between mt-5">
              <a
                className="project-button text-[10px] lg:text-[12px]"
                href="/project/3"
              >
                <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
                View Details
              </a>
              <a
                href="https://blood-buddies-donation.web.app/"
                target="_blank"
                rel="noreferrer"
                className="project-button text-[10px] lg:text-[12px]"
              >
                <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
                View Live
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <SectionBorder />
    </div>
  );
};

export default Portfolio;
