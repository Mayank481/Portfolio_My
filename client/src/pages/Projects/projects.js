import React from "react";
import "./Projects.css";
import {
  First_Project,
  Second_Project,
  Third_Project,
  First_Project_IMG,
  Second_Project_IMG,
  Third_Project_IMG,
} from "../../assets/links/links";
export const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Project's
        </h2>
        <hr />
        <p className="pb-3 text-left">
          As a Backend Development Specialist with a focus on Node.js, I bring a
          deep understanding of building scalable, efficient, and
          high-performance systems. With extensive experience in Node.js, I have
          mastered the art of creating reliable backend solutions that power
          modern web applications. My expertise spans across microservices
          architecture, where I leverage Docker to containerize applications for
          seamless deployment and scalability. I have hands-on experience in
          integrating caching solutions like Redis to optimize performance and
          ensure fast data retrieval, even in high-traffic environments.
          Additionally, I possess a strong command of MongoDB, which I use to
          design robust databases that handle complex data requirements
          efficiently. Beyond backend architecture, I am well-versed in API
          design, focusing on creating secure, efficient, and scalable RESTful
          APIs that connect front-end applications with the server seamlessly.
          My proficiency in JWT-based authentication systems ensures secure user
          management across platforms. I also excel at orchestrating backend
          services for real-time applications, utilizing WebSockets and Redis to
          provide users with responsive and interactive experiences. Having
          worked on various full-stack applications, I am familiar with using
          tools like Puppeteer for tasks like PDF generation, further enhancing
          the functionality of my projects. My experience with Postman API
          testing ensures that all endpoints are thoroughly tested for
          reliability and performance before deployment. I consistently strive
          to create solutions that not only meet immediate business needs but
          are also future-proof, scalable, and maintainable, making me a
          versatile and forward-thinking developer.
        </p>
        <div className="row" id="ads">
          {/* first project */}
          <div className="col-md-4">
            <div className="card rounded ml-2">
              <div className="card-image">
                <span className="card-notify-badge">Backend API</span>
                <img src={First_Project_IMG} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node.js</span>
                <span className="card-detail-badge">Express.js</span>
                <span className="card-detail-badge">MongoDb</span>
                <span className="card-detail-badge">Docker</span>
                <span className="card-detail-badge">Redis</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">CRUD Operation</h5>
                </div>
                <a className="ad-btn" href={First_Project}>
                  view
                </a>
              </div>
            </div>
          </div>
          {/* Second Project */}
          <div className="col-md-4">
            <div className="card rounded ml-2">
              <div className="card-image">
                <span className="card-notify-badge">Invoice Generate</span>
                <img src={Second_Project_IMG} alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node.js</span>
                <span className="card-detail-badge">Express.js</span>
                <span className="card-detail-badge">MongoDb</span>
                <span className="card-detail-badge">Puppeteer</span>
                <span className="card-detail-badge">Docker </span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Invoice Generate</h5>
                </div>
                <a className="ad-btn" href={Second_Project}>
                  view
                </a>
              </div>
            </div>
          </div>
          {/* Third project */}
          <div className="col-md-4">
            <div className="card rounded ml-2">
              <div className="card-image">
                <span className="card-notify-badge">Book Library</span>
                <img src={Third_Project_IMG} alt="project3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node.js</span>
                <span className="card-detail-badge">Express.js</span>
                <span className="card-detail-badge">MongoDb</span>
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">Passport.js</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Book Library</h5>
                </div>
                <a className="ad-btn" href={Third_Project}>
                  view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
