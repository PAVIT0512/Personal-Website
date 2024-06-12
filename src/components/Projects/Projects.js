import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import traffic from "../../Assets/Projects/traffic.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import universal from "../../Assets/Projects/universal.jpg";
import sam from "../../Assets/Projects/sam.jpg";
import charm from "../../Assets/Projects/charm.jpg";
import home from "../../Assets/Projects/home.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home}
              isBlog={false}
              title="House Price Prediction"
              description="A Regression model predicts home prices based on three key factors: physical conditions, concept, and location. 
              This information aids developers in setting the selling price and helps buyers choose the right time to purchase a house."
              ghLink="https://github.com/PAVIT0512/Home-Price-Predictor"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sam}
              isBlog={false}
              title="SAM"
              description="The Singulation Automation Machine was created for the Flipkart Grid 5.0 robotic challenge. This CNC-based robotic 
              arm employs a suction system and camera input for precision. It efficiently rotates cardboard boxes, ensuring that the label is
               consistently positioned on top."
              // ghLink="/project"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={universal}
              isBlog={false}
              title="Universal Power Supply"
              description="A circuit which converts AC supply (220V) to DC (12V and 5V).A universal power supply is a device that steps 110 or
               220-volt AC household current down and converts it to DC so it can power an electronic device, appliance, or some other electric
                equipment."
              ghLink="https://github.com/PAVIT0512/Universal-Power-Supply"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic Robot"
              description="
              An all-weather robot that bears a striking resemblance to a conventional traffic officer and possesses analogous traffic management
              skills. It employs advanced sensors to detect traffic patterns, boasts mobility, and can adjust its path based on evolving traffic
              conditions at intersections."
              
              // ghLink="/project"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charm}
              isBlog={false}
              title="CHARM"
              description="The Computerized Hardware Automated Reception Machine is an AI-driven robot that serves as a receptionist for a
              college. It interacts with visitors, provides information about the institution, and offers responses to user queries using
               its hardware-based artificial intelligence."
              // ghLink="/project"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/PAVIT0512/Face-Recognition"
              // demoLink="https://blogs.soumya-jit.tech/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
