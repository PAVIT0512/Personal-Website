import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css"; 
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/home.jpg";
import videoSource from "../../Assets/Projects/home_video.mp4";


function HousePricePrediction(props) {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <Container fluid className="project-section">
      <Particle style={{ position: "absolute", zIndex: 1 }} />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="image-container">
          <img src={houseImage} alt="House" />
        </div>
        <h1 className="project-heading">
          <strong className="purple">House Price Prediction</strong>
        </h1>
        <p style={{ color: "white" }}>
          A Machine Learning project for the implementation of Multiple
          Regression, solving the problem statement for Home Price Prediction by
          performing data preprocessing, feature engineering, data cleansing,
          and home price prediction using various regression techniques.
        </p>

        {/* Button to open video */}
        <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px" }}
        >
         <i class="fas fa-tv"></i>
        </Button>
        <Button variant="primary purple" href="https://github.com/PAVIT0512/Face_Recognition_and_Emotion" target="_blank" style={{ marginTop: "10px" ,marginLeft:"10px" }}>
        <i class="fab fa-github project_github_icon"></i>
        </Button>

        {/* Video popup */}
        {showVideo && (
          <div className="video-popup" style={{ position: "fixed", zIndex: 9999, top: "50px", left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="video-container" style={{ maxWidth: "800px", maxHeight: "600px", position: "relative" ,boxShadow: "0px 0px 100px rgba(128, 0, 128, 0.9)", paddingTop: "0px", borderRadius:"10px"}}>
              <video controls autoPlay loop style={{ maxWidth: "100%", maxHeight: "100%" , objectFit: "cover"}}>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="close-btn purple" onClick={closeVideo} style={{ position: "absolute", top: 10, right: 10, backgroundColor: "transparent", border: "none", color: "#fff", fontSize: 30, cursor: "pointer" }}>
              <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default HousePricePrediction;
