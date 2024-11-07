import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaNode } from "react-icons/fa";
export const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  black" }}
              date="11/2024 - Present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaNode />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Accenture solutions Pvt Ltd
              </h4>
              <p className="para">
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  black" }}
              date="08/2022 - 12/2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaNode />}
            >
              <h3 className="vertical-timeline-element-title">
                Associate Backend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Celebal Technologies Pvt Ltd
              </h4>
              <p className="para">
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  black" }}
              date="10/2019 - 09/2020"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaNode />}
            >
              <h3 className="vertical-timeline-element-title">
                Associate Backend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                MIPL solutions Pvt Ltd
              </h4>
              <p className="para">
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  black" }}
              date="02/2022 - 05/2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaNode />}
            >
              <h3 className="vertical-timeline-element-title">Internship</h3>
              <h4 className="vertical-timeline-element-subtitle">
                To The New Digital Pvt Ltd
              </h4>
              <p className="para">
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};
