import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import me1 from "../../Assets/me1.JPEG";
import me3 from "../../Assets/me3.jpg";
import me4 from "../../Assets/me4.jpg";
import me5 from "../../Assets/me5.JPG";
import me6 from "../../Assets/me6.jpg";
import Coursestack from "./Coursestack";

function About() {

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    me1,
    me3,
    me4,
    me5,
    me6,
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentImage, images.length]);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>.
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px", position: "relative" }}
            className="about-img"
          >
            <img
              src={images[currentImage]}
              alt="me"
              className="img-fluid"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Skillset</strong> 🧠
        </h1>

        <Techstack />

        <h1 className="project-heading">
        <strong className="purple">Coursework</strong> 🎓
        </h1>
        <Coursestack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
