import React from "react";
import ResumeIcon from "./ResumeIcon";
import "./newResume.css";
import { SiAxios } from "react-icons/si";
import { BsStripe } from "react-icons/bs";

const ComfortableIcon = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      className="skill-container aos-init aos-animate"
    >
      <h2>Comfortable</h2>
      <div className="flex flex-wrap justify-center gap-5 pb-5">
        {/* <div className="node">
          <ResumeIcon icon="fa-brands fa-node" text="Node.js" />
        </div>
        <div className="mongoDB">
          <ResumeIcon icon="fa-brands fa-envira" text="MongoDB" />
        </div> */}
        <div className="bootstrap">
          <ResumeIcon icon="fa-brands fa-bootstrap" text="Bootstrap" />
        </div>
        <div className="reactQuery">
          <ResumeIcon icon="fa-brands fa-react" text="React Query" />
        </div>
        <div className="axios">
          <ResumeIcon reactIcon={<SiAxios />} text="Axios" />
        </div>
        <div className="daisyUI">
          <ResumeIcon icon="fa-solid fa-fan" text="DaisyUI" />
        </div>
        <div className="stripe">
          <ResumeIcon reactIcon={<BsStripe />} text="Stripe" />
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
            <span className="text-yellow-500 mr-2">
              <svg
                width="18px"
                height="14px"
                viewBox="0 0 256 140"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z"
                    fill="#D0021B"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="">React Router</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComfortableIcon;
