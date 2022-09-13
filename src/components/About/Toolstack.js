import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Siwindows,
  SiVisualstudiocode
} from "react-icons/si";
import {BsWindows} from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
