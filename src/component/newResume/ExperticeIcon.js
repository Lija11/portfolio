import React from "react";
import ResumeIcon from "./ResumeIcon";
import { SiTailwindcss } from "react-icons/si";
import { AiFillCloud } from "react-icons/ai";

const ExperticeIcon = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="skill-container aos-init aos-animate"
      >
        <h2>Expertise</h2>
        <div className="flex flex-wrap justify-center gap-5 pb-5">
          <div className="java">
            <ResumeIcon icon="fa-brands fa-js-square" text="Javascript" />
          </div>
          <div className="html">
            <ResumeIcon icon="fa-brands fa-html5" text="HTML5" />
          </div>
          <div className="css">
            <ResumeIcon icon="fa-brands fa-css3" text="CSS" />
          </div>
          <div className="react">
            <ResumeIcon icon="fa-brands fa-react" text="React.Js" />
          </div>
          <div className="es6">
            <ResumeIcon
              doubleIcon1=" fa-solid fa-e "
              doubleIcon2="fa-solid fa-s"
              text="ES6"
            />
          </div>
          <div className="tailwind">
            <ResumeIcon reactIcon={<SiTailwindcss />} text="Tailwind" />
          </div>
          <div className="tailwind rest">
            <ResumeIcon reactIcon={<AiFillCloud />} text="Rest API" />
          </div>
          <div className="es6 express">
            <ResumeIcon
              doubleIcon1=" fa-solid fa-e "
              doubleIcon2="fa-solid fa-x"
              text="Express.js"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperticeIcon;
