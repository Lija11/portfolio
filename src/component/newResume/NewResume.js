import React from "react";
import ComfortableIcon from "./ComfortableIcon";
import ExperticeIcon from "./ExperticeIcon";
import LearningIcon from "./LearningIcon";
import "./newResume.css";
import ProfessionalTrainee from "./ProfessionalTrainee";
import Tools from "./Tools";

const NewResume = () => {
  return (
    <div
      id="resume"
      className="text-white max-w-7xl mx-auto p-[30px] lg:p-[0px]"
    >
      <div className="min-h-[50vh]">
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
      <div className="w-full max-w-7xl mx-auto bg-black h-[1px] mt-20 mb-0"></div>
    </div>
  );
};

export default NewResume;
