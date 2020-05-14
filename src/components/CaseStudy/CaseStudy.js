import React, { Component } from "react";
// import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Fade from "react-reveal/Fade";

import "../GlobalStyles/global.css";
import "./CaseStudy.css";
import { Container, Col, Row } from "react-bootstrap";
import FA from '../../images/forward.png';
import UI from '../ui/ui';
import UIW from '../uiuu/uiuu';
import Branding from '../Branding/branding';
import SOM from '../socialmedia/socialmedia';
import Illustration from '../illustration/illustration';
import Logos from "../Logos/Logos";



import Cases from "../cases/Case";

export default class CaseStudy extends Component {
  render() {
    return (
      <Container fluid className="whitebg" id="ourworks">
        <Container className="a-case-study-wrapper a-case-study-wrapper">
          <Col md={{ span: 8, offset: 2 }}>
            <Row className="pb-5 mp-0">
              <Col xs={12} md={6}>
                <Fade bottom>
                  <h2 className="bigText blackText">Our <br className="break" />
                  <span className="green">Portfolio</span></h2>
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
              <Branding />
              <Illustration />
              <UI />
              <SOM />
              <Logos />
              <UIW />
              <Cases />
            </Row>
          </Col>
          <center className="pt-5">
            <a href="/ourworks" className="hhh green b8 smallestText montserrat">
            Check out our process <img src={FA} alt=""  className="arrow" />
            </a>
          </center>
        </Container>
      </Container>
    );
  }
}


// Social Media
// PRODUCT DESIGN
// LOGOS
