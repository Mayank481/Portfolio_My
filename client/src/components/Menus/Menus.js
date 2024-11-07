import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Img from "../../assets/image/me.jpeg";
import { Link } from "react-scroll";

import {
  FcAbout,
  FcAssistant,
  FcBiotech,
  FcFactoryBreakdown,
  FcGraduationCap,
  FcHome,
  FcVideoProjector,
} from "react-icons/fc";
export const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={Img} alt="profile pic" />
            </div>
          </Zoom>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="edu"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcGraduationCap />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcVideoProjector />
                  projects
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcFactoryBreakdown />
                  Work Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcAssistant />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="edu"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcGraduationCap />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcVideoProjector />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcFactoryBreakdown />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcAssistant />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
