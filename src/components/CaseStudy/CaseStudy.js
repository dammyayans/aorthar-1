import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import "../GlobalStyles/global.css";
import "./CaseStudy.css";
import { Container, Col, Row } from "react-bootstrap";
import FA from '../../images/forward.png';

export default class CaseStudy extends Component {
  render() {
    return (
      <Container fluid className="whitebg">
        <Container className="a-case-study-wrapper a-case-study-wrapper">
          <Col md={{ span: 8, offset: 2 }}>
            <Row className="pb-5 mp-0">
              <Col xs={12} md={6}>
                <Fade bottom>
                  <h2 className="bigText blackText">Case <br className="break" />Study</h2>
                </Fade>
              </Col>
              <Col xs={12} md={6}>
                <Fade bottom>
                  <div className="a-case-study-caption smallestText blackText b4 montserrat">
                    Have a glance at some selected works we are proud of, as we
                    delivered solutions to branding and design pattern and
                    design problems, with in-depth research, innovation and
                    creativity.
                  </div>
                </Fade>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col xs={12} md={4} className="p-2">
                <Fade bottom delay={100}>
                  <div className="a-case-study-cards1"></div>
                </Fade>
              </Col>
              <Col xs={12} md={4} className="p-2">
                <Fade bottom delay={100}>
                  <div className="a-case-study-cards2"></div>
                </Fade>
              </Col>
              <Col xs={12} md={4} className="p-2">
                <Fade bottom delay={100}>
                  <div className="a-case-study-cards3"></div>
                </Fade>
              </Col>
            </Row>
          </Col>
          <center className="pt-4">
            <a href="/ourworks" className="hhh green bold">
            Check out our process <img src={FA} alt=""  className="arrowforward" />
            </a>
          </center>
        </Container>
          {/* <Row> */}
          {/* </Row> */}
      </Container>
    );
  }
}
