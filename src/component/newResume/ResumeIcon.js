import React from "react";
import "./newResume.css";

const ResumeIcon = ({ icon, doubleIcon1, doubleIcon2, reactIcon, text }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="200"
      className="aos-init aos-animate"
    >
      <p className="flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300">
        <span className=" mr-2">
          <i className={icon} />
        </span>
        <div className="twoIcons">
          <i className={doubleIcon1} />
          <i className={doubleIcon2} />
        </div>
        <div className="reactIcons">{reactIcon}</div>
        <span className="mr-2">{text}</span>
      </p>
    </div>
  );
};

export default ResumeIcon;
