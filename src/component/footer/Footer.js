import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-content pb-10 -mt-10">
      <footer className="footer flex justify-center items-center gap-24 p-10 text-neutral-content max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-primary ">Liza Akter</h2>
          <p className="text-gray-600">All Rights Reserved @ Liza Akter</p>
        </div>
        <div>
          <span className="footer-title text-primary">Social</span>
          <div className="flex gap-5  mt-[15px] text-primary">
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
      </footer>
    </div>
  );
};

export default Footer;
