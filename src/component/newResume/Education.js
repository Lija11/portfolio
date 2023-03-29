import React from "react";

const Education = () => {
  return (
    <div id="education" className="block">
      <div>
        <div className="relative max-w-2xl mx-auto mt-16">
          <div className="absolute top-0 h-full border-r-2 border-black left-3"></div>
          <ul className="space-y-2">
            <li>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1500"
                className="timeline-card flex items-center mb-10 aos-init aos-animate"
              >
                <div className="education-card p-5 lg:p-10 ml-10 text-left text-accent">
                  <p className="text-xl text-white font-semibold">
                    BSc (Honours) Department of Geography & Environment
                  </p>
                  <div className="w-full max-w-7xl mx-auto bg-black h-[1px] mb-3 my-3 mb-20"></div>
                  <p>National University of Bangladesh</p>
                  <p>2022 (First Semester) - 2026 (Possibly)</p>
                </div>
              </div>
            </li>
            {/* <li>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1500"
                className="timeline-card flex items-center mb-10 aos-init"
              >
                <div className="education-card p-5 lg:p-10 ml-10 text-left text-accent">
                  <p className="text-xl text-white font-semibold">Science</p>
                  <div className="w-full max-w-7xl mx-auto bg-black h-[1px] mb-3 my-3 mb-20"></div>
                  <p>Notre Dame Collage</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
