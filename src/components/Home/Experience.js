import React from "react";
import { Container } from "react-bootstrap";

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <h1 className="experience-heading">
          MY <span className="purple"> EXPERIENCE </span>
        </h1>
        <p className="experience-description">
        These are the pivotal experiences that have shaped my journey:
        </p>
        <div className="timeline">
          <div className="timeline-item">
              <div className="timeline-item-marker"></div>
              <div className="timeline-item-content">
                <h2>Robotics Software Engineer </h2>
                <h4>Alphadroid India Private Limited</h4>
                <p>August 2024 - Present</p>
              </div>
            </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <h2>Robotics Engineer Intern </h2>
              <h4>Void Robotics</h4>
              <p>January 2024 - June 2024</p>
            </div>
            <div className="timeline-item-marker"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-marker"></div>
            <div className="timeline-item-content">
              <h2>Artificial Intelligence Intern </h2>
              <h4>AICTE & IBM SkillBuild</h4>
              <p>June 2023 - July 2023</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <h2>Electric Vehicle Intern </h2>
              <h4>ESLA Transtech Private Limited</h4>
              <p>August 2022 - March 2023</p>
            </div>
            <div className="timeline-item-marker"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-marker"></div>
            <div className="timeline-item-content">
              <h2>Head of Acrotronics Club</h2>
              <h4>Acropolis Institute of Technology and Research</h4>
              <p>February 2022 - May 2024</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <h2>Robotics Engineer Intern </h2>
              <h4>APSIS Solutions by InMovidu</h4>
              <p>April 2021 - May 2021</p>
            </div>
            <div className="timeline-item-marker"></div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
