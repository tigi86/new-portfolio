import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import mycv from "../../assets/mycv.pdf"; // This import is correct
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="about" className="hero">
      <img className="myphoto" src={profile} alt="" />
      <h1>
        {" "}
        <span>I'm Tigistu Yohannis,</span> Full-stack web developer
      </h1>
      <p>
        I am a full stack web developer from Ethiopia, i developed many projects
        by myself from when i was 3rd year Computer Engineering student at dilla
        university.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href={mycv}
            download="Tigistu_Yohannis_CV.pdf"
            className="btn btn2"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
