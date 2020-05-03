import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import "../GlobalStyles/global.css";
import "./DesignYarn.css";
import { Container, Col, Row } from "react-bootstrap";
import DY from "../../images/designyarn.png";

export default class DesignYarn extends Component {
  render() {
    return (
      <Container fluid className="whitebg">
        <Container className="a-case-study-wrapper a-case-study-wrapper">
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="pb-5">
              <Col xs={12} md={6}>
                <Fade bottom>
                  <h2 className="bigText blackText">Design Yarn</h2>
                </Fade>
                <Fade bottom duration={100}>
                  <div className="a-case-study-caption smallestText blackText b4 montserrat pb-4">
                    Discus Design Journey and Experience with Top Designers in <br />
                    The industry every week
                  </div>
                </Fade>
                <Fade bottom delay={400}>
                  <a href="https://bit.ly/designyarnREG" target="blank" className="dyRegister montserrat">Register</a>
                </Fade>
              </Col>
              <Col xs={12} md={6}>
                <Fade bottom delay={200}>
                  <img src={DY} alt="" className="dyBanner" />
                </Fade>
              </Col>
            </Row>
          </Col>
        </Container>
      </Container>
    );
  }
}
