import React from "react";
import SectionBorder from "../SectionBorder";
import "./contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="max-w-7xl mx-auto p-[30px] lg:p-30px]">
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="aos-init aos-animate"
      >
        <p className="text-xs lg:text-sm text-secondary uppercase mb-[13px]">
          Contact
        </p>
        <p className="text-primary font-bold text-3xl lg:text-5xl mb-10">
          Contact With Me
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-10">
        <div
          data-aos="fade-up-right"
          data-aos-duration="1500"
          className="contact-card p-5 lg:p-10 w-full lg:w-2/5 h-full text-left aos-init aos-animate"
        >
          <div className="contact-image rounded-2xl overflow-hidden mb-10">
            <img src="images/banner.png" alt="" />
          </div>
          <h3 className="text-3xl font-semibold text-accent my-4">
            Liza Akter
          </h3>
          <p className="text-gray-500 text-base lg:text-lg">
            Front-End Developer
            <br />
            <br />I am available for freelance work. Connect with me via call or
            email me in to my account.
            <br />
            <br />
            Phone : <span className="text-primary ml-2">+8801690143380</span>
            <br />
            Email :<span className="text-primary ml-2">lijasm32@gmail.com</span>
          </p>
          <div className="mt-5">
            <h5 className="text-gray-500 text-lg mb-3 uppercase tracking-wide">
              Find Me
            </h5>
            <div className="flex gap-5">
              <a
                href="https://github.com/Lija11"
                target="_blank"
                rel="noreferrer"
              >
                <div className="action-box">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/lija-akter-5a31031b6/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="action-box">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </a>
              <a
                href="https://www.facebook.com/liza11l"
                target="_blank"
                rel="noreferrer"
              >
                <div className="action-box">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <SectionBorder />
    </div>
  );
};

export default Contact;
