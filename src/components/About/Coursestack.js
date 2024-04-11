import React from "react";
import { Col, Row } from "react-bootstrap";

function Courses() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={1} className="courses">
        <h5>Mobile Application Developement</h5>
      </Col>
      <Col xs={3} md={1} className="courses">
        <h5>Design & Analysis of Algorithms</h5>
      </Col>
      <Col xs={3} md={1} className="courses">
        <h5>Natural Language Processing</h5>
      </Col>
      <Col xs={3} md={1} className="courses">
        <h5>Machine Learning</h5>
      </Col>
      <Col xs={3} md={1} className="courses">
        <h5>Cloud Computing</h5>
      </Col>
      <Col xs={3} md={1} className="courses">
        <h5>Advance Database Organization</h5>
      </Col>
      <Col xs={3} md={1} className="courses">
        <h5>Advance Operating Systems</h5>
      </Col>
      <Col xs={3} md={1} className="courses">
        <h5>Software Project Management</h5>
      </Col>
      <Col xs={3} md={1} className="courses">
        <h5>Big Data Technologies</h5>
      </Col>
    </Row>
  );
}

export default Courses;
