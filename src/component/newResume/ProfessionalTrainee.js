import React from "react";
import "../newResume/newResume.css";

const ProfessionalTrainee = () => {
  return (
    <div id="trainee" class="block">
      <div>
        <div class="relative max-w-2xl mx-auto mt-16">
          <div class="absolute top-0 h-full border-r-2 border-black left-3"></div>
          <ul class="space-y-2">
            <li>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1500"
                class="timeline-card flex items-center mb-10 aos-init aos-animate"
              >
                <div class="education-card p-5 lg:p-10 ml-10 text-left text-accent">
                  <p class="text-xl text-white font-semibold">
                    Complete Development Course
                  </p>
                  <div class="w-full max-w-7xl mx-auto bg-black h-[1px] mb-3 my-3 mb-20"></div>
                  <p>Programming Hero</p>
                  <p>January 2022 - May 2022</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTrainee;
