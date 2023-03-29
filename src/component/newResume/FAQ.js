import React from "react";
import { useState } from "react";
import FAQdata from "./FAQdata";
import "./newResume.css";

const FAQ = () => {
  const data = FAQdata;
  console.log(data, "data");
  const [FAQ, setFAQ] = useState(FAQdata);
  const [toggle, setToggle] = useState(false);

  const handleFAQ = (id) => {
    console.log(id);
    FAQ.map((item, index) => {
      {
        if (id == index) {
          item.status = true;
          setFAQ([...FAQ]);
        } else {
          item.status = false;
          setFAQ([...FAQ]);
        }
      }
    });
  };

  return (
    <div
      id="resume"
      className="text-white max-w-7xl mx-auto p-[30px] lg:p-[0px]"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="aos-init aos-animate"
      >
        <p className="text-xs lg:text-sm  text-secondary uppercase mb-[13px]">
          Liza Akter
        </p>
        <p className="text-accent font-bold text-3xl lg:text-5xl mb-10">
          My Resume
        </p>
      </div>
      <div className="min-h-[50vh]">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="tab-button-content w-full aos-init aos-animate"
        >
          {FAQ.map((item, index) => (
            <>
              <label
                // className="tab-button py-7 px-14  text-xs lg:text-base active-tab w-1/3"
                className="tab-buttno py-7 px-14  text-xs lg:text-base active-tab w-1/3"
                onClick={() => handleFAQ(index)}
                key={index}
              >
                {item.title}
              </label>
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
              ></button>
            </>
          ))}
        </div>
        {FAQ.map((item, index) => (
          <div onClick={() => handleFAQ(index)} key={index}>
            <div>{item.status && <p>{item.details}</p>}</div>
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
