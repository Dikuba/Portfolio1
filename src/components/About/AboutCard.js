import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alicia Dikuba </span>
            from <span className="purple"> Yaounde, Cameroon.</span>
            <br />I am a Senior studying Software Engineering at the ICT University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight />Listening to music
              </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It does not matter how slowly you go so long as you do not stop."{" "}
          </p>
          <footer className="blockquote-footer">Conficius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
