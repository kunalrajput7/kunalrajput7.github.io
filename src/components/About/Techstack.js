import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango,
  DiJava,
} from "react-icons/di";
import {
  SiNumpy,
  SiExpress,
  SiGnubash,
  SiScikitlearn
} from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>ReactJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>NodeJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <h6>Flutter</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      <h6>ExpressJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <h6>Django</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGnubash />
      <h6>Bash Scripting</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbCloudComputing />
      <h6>Cloud Computing</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJava />
      <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <h6>Numpy</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <h6>Scikit-learn</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
