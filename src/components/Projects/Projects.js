import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
         Nothing Yet
        </p>
        
      </Container>
    </Container>
  );
}

export default Projects;
