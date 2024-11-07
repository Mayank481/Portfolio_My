import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { PiMoonStarsFill, PiSunDuotone } from "react-icons/pi";
import { whatsapp_API } from "../../assets/links/links";
export const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <PiMoonStarsFill size={30} />
          ) : (
            <PiSunDuotone size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi I'm Mayank Jaggi 🙋‍♂️ </h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Backend Developer !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href={whatsapp_API}
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="MayankJaggi.pdf">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
