import React from "react";
import SectionBorder from "../SectionBorder";
import ComfortableIcon from "./ComfortableIcon";
import ExperticeIcon from "./ExperticeIcon";
import LearningIcon from "./LearningIcon";
import "./newResume.css";
import Tools from "./Tools";

const NewResume = () => {
  return (
    <div id="resume" className="text-white max-w-7xl mx-auto lg:p-[0px]">
      <div>
        <div>
          <div id="skill" className="block">
            <div id="skill" className="mt-16 text-accent">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <ExperticeIcon />
                <ComfortableIcon />
                <LearningIcon />
                <Tools />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto bg-black h-[1px] mt-[60px] lg:mt-[80px] mb-[-40px]"></div>
    </div>
  );
};

export default NewResume;
