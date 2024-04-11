import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix_project.png";
import kiri from "../../Assets/Projects/kiri_project.png";
import stock from "../../Assets/Projects/stock_project.png";
import yahtzee from "../../Assets/Projects/yahtzee_project.png";
import ttt from "../../Assets/Projects/ttt_project.png";
import battleship from "../../Assets/Projects/battleship_project.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix"
              description="
              The Netflix Clone website, built with Angular, JavaScript, and Tailwind CSS, seamlessly integrates Google authentication. Leveraging the TMDB API, it presents a comprehensive catalog of movies and TV shows. Users can delve into detailed title information and navigate effortlessly through the interface, thanks to its responsive design and intuitive navigation. With a focus on technical prowess, the Netflix Clone offers a dynamic and immersive streaming experience, mirroring the functionality of the renowned streaming service."
              ghLink="https://github.com/kunalrajput7/netflix_clone"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kiri}
              isBlog={false}
              title="Kiri- AI Voice Assistant"
              description="Crafted with Dart and Flutter, our voice assistant app for Android/iOS boasts cutting-edge technology. It features advanced speech recognition and Restful API integration, empowering users to interact seamlessly through voice commands. Leveraging OpenAI APIs, the app delivers dynamic responses and image generation, elevating user engagement. With a focus on seamless and intelligent functionality, our app sets new standards for user interaction across platforms."
              ghLink="https://github.com/kunalrajput7/kiri_ai_app"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Market Price Prediction"
              description="
              This project exemplifies LSTM neural networks' application in predicting stock prices. Through Tiingo API, historical stock data is fetched and preprocessed, scaling values to [0, 1] and splitting into training/testing datasets. The LSTM model, constructed using TensorFlow Keras, includes multiple LSTM layers with dropout layers for regularization. Trained with Adam optimizer and mean squared error loss, the model predicts future stock prices, evaluated by RMSE metrics. This demonstrates LSTM's efficacy in time series forecasting."
              ghLink="https://github.com/kunalrajput7/stock_prediction_using_lstm"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yahtzee}
              isBlog={false}
              title="Yahtzee Game"
              description="Experience Yahtzee like never before with this Flutter and Dart-powered mobile app. Dive into the classic dice game's excitement, strategizing your moves and aiming for the highest score. This app boasts flawless logic implementation for an authentic gaming experience. With an intuitive UI and seamless gameplay, both seasoned pros and newcomers will be captivated. Available on Android and iOS, get ready to roll the dice and enjoy endless entertainment on the go!"
              ghLink="https://github.com/kunalrajput7/the_yahtzee_game"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttt}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Experience the very catchy, Tic-Tac-Toe game, where childhood memories meets cutting-edge technology. With React and CSS as backbone, enjoy flawless functionality and sleek visual appeal. Enhanced by Framer Motion, relish fluid animations for an immersive user experience. Whether you're a pro player or a newcomer, this app delivers unparalleled sophistication and engagement."
              ghLink="https://github.com/kunalrajput7/tic-tac-toe"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battleship}
              isBlog={false}
              title="Battleship Game"
              description="
              Crafted the Battleship game for Android using Flutter, enabling engaging 1v1 multiplayer battles. Implemented a robust server architecture for centralized data storage, facilitating seamless gameplay and user interaction. Application supports multiplayer matches against opponents or AI with adjustable difficulty levels. Additionally, players can access their game history for comprehensive analytics. With a focus on smooth gameplay and intuitive UI, our app delivers an immersive gaming experience for enthusiasts."
              ghLink="https://github.com/kunalrajput7/battleship_game"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
