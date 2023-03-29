import { TypeAnimation } from "react-type-animation";

const TypeAni = () => {
  return (
    <h1
      data-aos="fade-down-right"
      data-aos-duration="1000"
      className="uppercase font-semibold my-7 text-left text-3xl
    lg:text-6xl text-white leading-snug aos-init aos-animate"
    >
      Hi, I'm
      <span className="text-secondary"> Liza Akter</span>
      <br />
      <span>
        <span>a {}</span>
        <TypeAnimation
          sequence={[
            "frontend developer",
            2000,
            "react develiper",
            2000,
            "web designer",
            2000,
          ]}
          speed={30}
          wrapper="span"
          style={{ fontSize: "50px" }}
          repeat={Infinity}
        />
      </span>
    </h1>
  );
};

export default TypeAni;
