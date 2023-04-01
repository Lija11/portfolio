import React from "react";
import { Link } from "react-scroll";
import SectionBorder from "../SectionBorder";
import SkillIcon from "./SkillIcon";
import TypeAni from "./TypeAni";

const Banner = () => {
  return (
    <div id="home">
      <div className="min-w-screen p-5">
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto mt-16 flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="w-full p-[10px] lg:p-[0] lg:w-2/3">
              <div>
                <p
                  data-aos="fade-down-right"
                  data-aos-duration="1000"
                  className="uppercase text-left text-xs lg:text-lg text-primary aos-init aos-animate"
                >
                  Welcome To My World
                </p>
                <TypeAni />
                <p
                  data-aos="fade-down-right"
                  data-aos-duration="1000"
                  className="text-[20px] text-left lg:text-lg text-primary w-full lg:w-[60ch] lg:mb-20 aos-init aos-animate"
                >
                  Hi I am a Front-End developer And I can build your website as
                  you want. <br />
                  <br />
                  Creative problem solver with demonstrated ability to work on
                  multiple projects simultaneously.Positive driven and confident
                  individual with an apt for learning new technology.
                </p>
              </div>
              <div className="flex gap-5 my-10 -mb-20 ">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="aos-init aos-animate"
                >
                  <a href="https://drive.google.com/file/d/1ZkCUVKogZY75BELlxSx8HBvPlWblG7JS/view?usp=share_link">
                    <button className="resumeBtn">
                      <span className="resumeBtnShadow"></span>
                      <span className="resumeBtnEdge"></span>
                      <span className="resumeBtnFront text">My Resume</span>
                    </button>
                  </a>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="aos-init aos-animate"
                >
                  <Link
                    // activeClass="active"
                    to="contact"
                    // spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                    // onSetActive={this.handleSetActive}
                    className="px-4"
                  >
                    <button className="resumeBtn">
                      <span className="resumeBtnShadow"></span>
                      <span className="resumeBtnEdge"></span>
                      <span className="resumeBtnFront text">Hire Me</span>
                    </button>
                  </Link>
                  {/* <a href="/contact">
                    <button className="resumeBtn">
                      <span className="resumeBtnShadow"></span>
                      <span className="resumeBtnEdge"></span>
                      <span className="resumeBtnFront text">hire me</span>
                    </button>
                  </a> */}
                </div>
              </div>
              <SkillIcon />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="image w-[100%] lg:w-[32rem] h-[25rem] lg:h-[35rem] flex justify-end bg-white relative mb-20 -mt-8 lg:mt-0 aos-init aos-animate"
            >
              <img
                className="absolute bottom-0"
                src="images/banner.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <SectionBorder />
      </div>
    </div>
  );
};

export default Banner;
