import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kunal Rajput </span>
            from <span className="purple"> Chicago, USA</span> 
            <br />
            <br />
            From the corridors of Pune University to the vibrant <span className="purple">Illinois Institute of Technology</span>, my journey in Computer Science has been a thrilling adventure of growth and discovery. Inspired by visionary leaders, 
            I'm driven to innovate and make a meaningful impact in the ever-evolving tech landscape.
            <br />
            <br />
            I have a professional experience of <span className="purple">2 years</span> as a <span className="purple">Software Developer</span> at <span className="purple">Persistent Systems Ltd</span>.
            My learnings have sculpted me into a developer ready to tackle the future's challenges.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Professional Video Gamer.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling/Camping.
            </li>
            <li className="about-activity">
              <ImPointRight /> Brainstorming new tech ideas.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Vision without execution is just hallucination."{" "}
          </p>
          <footer className="blockquote-footer">Henry Ford</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
