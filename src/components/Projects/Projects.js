import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import traffic from "../../Assets/Projects/traffic.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import universal from "../../Assets/Projects/universal.jpg";
import sam from "../../Assets/Projects/sam.jpg";
import suicide from "../../Assets/Projects/suicide.png";
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
              description="Regression model which predicts home prices based on the learnings from the features.House price prediction can help the developer determine the selling price of a house and can help the customer to arrange the right time to purchase a house.
               There are three factors that influence the price of a house which include physical conditions, concept and location."
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sam}
              isBlog={false}
              title="SAM"
              description="Singulation Automation Machine, A CNC based robotic arm which solves the problem statement given by flipkart ."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={universal}
              isBlog={false}
              title="Universal Power Supply"
              description="A circuit which converts AC supply (220V) to DC (12V and 5V).A universal power supply is a device that steps 110 or 220-volt AC household current down and converts it to DC so it can power an electronic device, appliance, or some other electric equipment.Laptops and household appliances, as well as audio and video and other other electronic equipment, come with their own mobile power supply so you can run them from a household circuit."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic Robot"
              description="Robot cop manages high density traffic at Indore's SICA School Junction Indore has one of the highest vehicle densities in 
              the country has set up an AI robot at an intersection in the city to manage the traffic on trial basis. Police commissioner reviewed it and appreciated its functioning, 
              said U B Singh, HoD of Acropolis Institute, which designed the Rs 4 Lakh robot."
              
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
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
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
