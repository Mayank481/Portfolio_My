import React, { useState } from "react";
import "./MobileNav.css";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";
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
export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <IoMdMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={100}
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcAssistant />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
