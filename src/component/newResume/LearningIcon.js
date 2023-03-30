import React from "react";
import ResumeIcon from "./ResumeIcon";
import { TbBrandNextjs } from "react-icons/tb";

const LearningIcon = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="skill-container aos-init aos-animate"
    >
      <h2>Learning</h2>
      <div className="flex flex-wrap justify-center gap-5 pb-5">
        <div className="native">
          <ResumeIcon icon=" fa-brands fa-react " text="React Native" />
        </div>
        <div className="mongoose">
          <ResumeIcon icon=" fa-brands fa-js-square " text="Mongoose" />
        </div>
        <div className="tailwind">
          <ResumeIcon reactIcon={<TbBrandNextjs />} text="Next.Js" />
        </div>
        <div className="es6 express">
          <ResumeIcon
            doubleIcon1=" fa-solid fa-e "
            doubleIcon2="fa-solid fa-x"
            text="Express.js"
          />
        </div>
        <div className="node">
          <ResumeIcon icon="fa-brands fa-node" text="Node.js" />
        </div>
        <div className="mongoDB">
          <ResumeIcon icon="fa-brands fa-envira" text="MongoDB" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
          className="aos-init aos-animate"
        >
          <p className="flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300">
            <span className="text-purple-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-framer"
              >
                <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
              </svg>
            </span>
            <span className="">Framer Motion</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningIcon;
