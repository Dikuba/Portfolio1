import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
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
              I was inspired by programming and fell in love with it.
              I think I learnt something. Though I may not be good what I know is that I always come through in the end.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++ </b>
              </i>
              <br/>
              <br/>I'm almost fluent in
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are exploring new &nbsp;
              <i>
                <b className="purple">Technologies and building new Products </b>also 
                areas related to{" "}
                <b className="purple">
                  AI and Robotics Facinate me.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I will like apply my passion for developing products.
               But right now being fluent with<b className="purple">Javascript</b> and React.js/Node.js/Next.js And
              <i>
                <b className="purple">
                  {" "}
                   Modern Python Library and Frameworks Is My Aim
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Django</b>
              </i>
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
              Feel free to <span className="purple">connect and talk </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dikuba"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/alicia_dak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/dikuba-kindjel-alicia-ashley"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dikubak/"
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
