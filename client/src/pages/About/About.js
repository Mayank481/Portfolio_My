import React from "react";
import "./About.css";
import Img from "../../assets/image/me.jpeg";
export const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Img} alt="profile_pic" />
          </div>
          <div className="col-md-6  col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              👋 Hello Welcome Users ! I am a Backend Developer with nearly 3
              years of experience, specializing in Node.js and JavaScript. My
              focus is on building scalable and efficient backend systems,
              integrating APIs, and developing microservice architectures. Over
              the years, I’ve had the opportunity to work on diverse projects
              across various industries, consistently delivering high-quality
              code and ensuring seamless integrations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
