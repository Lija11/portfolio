import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaReact } from "react-icons/fa";
import { DiJavascript1, DiCss3 } from "react-icons/di";

const SkillIcon = () => {
  return (
    <div className="text-primary flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pr-0 lg:pr-36 mt-32">
      <div>
        <h5
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-left mb-8 uppercase tracking-wide aos-init aos-animate"
        >
          Find Me
        </h5>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex gap-5 aos-init aos-animate"
        >
          <a href="https://github.com/Lija11" target="_blank">
            <div className="action-box text-primary">
              <AiFillGithub />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/lija-akter-5a31031b6/"
            target="_blank"
          >
            <div className="action-box text-primary">
              <AiFillLinkedin />
            </div>
          </a>
          <a href="https://www.facebook.com/liza11l" target="_blank">
            <div className="action-box text-primary">
              <FaFacebookF />
            </div>
          </a>
        </div>
      </div>
      <div>
        <h5
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-left mb-8 uppercase tracking-wide aos-init aos-animate"
        >
          Best skill
        </h5>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex gap-5 aos-init aos-animate"
        >
          <div className="action-box text-[#254BDD]">
            <FaReact />
          </div>
          <div className="action-box text-[#F7C327]">
            <DiJavascript1 />
          </div>
          <div className="action-box text-[#254BDD]">
            <DiCss3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
