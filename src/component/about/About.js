import React from "react";

const About = () => {
  return (
    <>
      <div class=" flex items-center min-h-[95vh] text-primary">
        <div class="flex flex-col gap-10 items-center justify-center max-w-7xl mx-auto p-5">
          <div class="flex flex-col lg:flex-row p-4 justify-center items-center gap-10 w-full mb-32">
            <div class="about-box w-64 lg:w-96 h-860 overflow-hidden">
              <img
                class="inside-img w-64 lg:w-96 h-830"
                src="images/banner.png"
                alt=""
              />
            </div>
            <div class="flex flex-col items-start">
              <h2 class="text-4xl text-secondary font-bold ">Liza Akter</h2>
              <p class=" text-sm">Front-End Developer</p>
              <div class="text-center lg:text-left w-full my-4">
                <p class="text-left text-base text-accent w-full lg:w-[60ch]">
                  Hi I am a Front-End developer And I can build your website as
                  you want.
                  <br />
                  <br />
                  Creative problem solver with demonstrated ability to work on
                  multiple projects simultaneously. Positive driven and
                  confident individual with an apt for learning new technology.
                </p>
              </div>
              <div class="my-4">
                <h2 class="text-xl font-semibold text-secondary">
                  Contact Information
                </h2>
                <div>
                  Email: lijasm32@gmail.com <br /> Phone: +8801690143380
                  <br /> Address: Dhaka, Bangladesh
                </div>
              </div>
              <div class="text-primary flex flex-col lg:flex-row gap-10 lg:gap-10 justify-between pr-0 lg:pr-36 mt-3">
                <div>
                  <h5 class="text-left mb-3 uppercase tracking-wide">
                    Find Me
                  </h5>
                  <div class="flex gap-5">
                    <a
                      href="https://github.com/Lija11"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div class="action-box">
                        <i class="fa-brands fa-github"></i>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lija-akter-5a31031b6/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div class="action-box">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/liza11l"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div class="action-box">
                        <i class="fa-brands fa-facebook-f"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <h5 class="text-left mb-3 uppercase tracking-wide">
                    Best skills
                  </h5>
                  <div class="flex gap-5">
                    <div class="action-box text-blue-500">
                      <i class="fa-brands fa-react"></i>
                    </div>
                    <div class="action-box text-yellow-500">
                      <i class="fa-brands fa-js-square"></i>
                    </div>
                    <div class="action-box text-blue-500">
                      <i class="fa-brands fa-css3-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-7xl mx-auto bg-black h-[1px] mt-20 mb-20"></div>
    </>
  );
};

export default About;
