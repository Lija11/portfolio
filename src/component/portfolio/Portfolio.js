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
          My Projects
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
                <img src="images/chat.jpg" alt="" loading="lazy" />
              </picture>
            </div>
            <div>
              <h2 className="font-semibold text-sm my-4 text-secondary">
                Realtime-Chat-App
              </h2>
              <h2 className="project-title text-accent font-semibold text-xl my-4">
                Realtime Chat Application using React and Firebase
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
                href="https://realtime-chat-application1.netlify.app/message"
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
              <picture>
                <img src="images/finsweet.jpg" alt="" loading="lazy" />
              </picture>
            </div>
            <div>
              <h2 className="font-semibold text-sm my-4 text-secondary">
                Finsweet
              </h2>
              <h2 className="project-title text-accent font-semibold text-xl my-4">
                Building stellar websites for early startups
                <i className="title-icon text-secondary ml-2 fa-solid fa-arrow-turn-up"></i>
              </h2>
            </div>
            <div className="button-content flex justify-between mt-5">
              {/* <a
                className="project-button text-[10px] lg:text-[12px]"
                href="/project/2"
              >
                <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
                View Details
              </a> */}
              <a
                href="https://finsweet11.netlify.app/"
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
              <picture>
                <img src="images/fastjao.jpg" alt="" loading="lazy" />
              </picture>
            </div>
            <div>
              <h2 className="font-semibold text-sm my-4 text-secondary">
                Fast Jao
              </h2>
              <h2 className="project-title text-accent font-semibold text-xl my-4">
                Enjoy! Hassle Free Delivery Services
                <i className="title-icon text-secondary ml-2 fa-solid fa-arrow-turn-up"></i>
              </h2>
            </div>
            <div className="button-content flex justify-between mt-5">
              {/* <a
                className="project-button text-[10px] lg:text-[12px]"
                href="/project/2"
              >
                <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
                View Details
              </a> */}
              <a
                href="https://fastjao.netlify.app/"
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
      </div>
      <SectionBorder />
    </div>
  );
};

export default Portfolio;
