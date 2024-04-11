import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me_homepage.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Diving into algorithms and coding, I found a strong passion for 
              <b className="purple"> Computer Science</b>, which keeps me motivated to innovate.
              <br />
              <br />Familiar with various technologies including
              <span>
                <b className="purple"> ReactJS, JavaScript, Python, Flutter</b>
              </span> and creating <b className="purple">Machine Learning Models</b>.
              I love learning new things and can quickly grasp new concepts.
              <br />
              <br />
              My field of interests are building new &nbsp;
              <span>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Artificial Intelligence
                </b>.
              </span>
              <br />
              <br />
              I am eagerly seeking <b className="purple">Summer Internship</b> opportunities for 2024, 
              particularly in <b className="purple">Software Developer</b> roles, as I am enthusiastic about gaining industry experience and contributing to innovative projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              github<span className="purple"> | </span>twitter<span className="purple"> | </span>
               linkedin<span className="purple"> | </span>instagram
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kunalrajput7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kunal7rajput"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kunalrajput007/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kunaaaaall_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
