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
        <div className="typescript">
          <ResumeIcon
            doubleIcon1=" fa-solid fa-t "
            doubleIcon2="fa-solid fa-s"
            text="Typescript"
          />
        </div>
        <div className="native">
          <ResumeIcon icon=" fa-brands fa-react " text="React Native" />
        </div>
        <div className="mongoose">
          <ResumeIcon icon=" fa-brands fa-js-square " text="Mongoose" />
        </div>
        <div className="tailwind">
          <ResumeIcon reactIcon={<TbBrandNextjs />} text="Next.Js" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
          className="aos-init aos-animate"
        >
          <p className="flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300">
            <span className="text-yellow-500 mr-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 256 204"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <polygon
                    fill="#00B0FF"
                    points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
                  ></polygon>
                  <polygon
                    fill="#0081CB"
                    points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
                  ></polygon>
                  <polygon
                    fill="#00B0FF"
                    points="96 129.322667 96 166.272 160 203.221333 160 166.272"
                  ></polygon>
                  <path
                    d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z"
                    fill="#0081CB"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="">MaterialUI</span>
          </p>
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
