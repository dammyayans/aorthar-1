import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import HeroImage from "../../images/raeannabanner.png";
import CS1 from "../../images/raeanna1.png";
import CS2 from "../../images/raeanna2.png";
import CS3 from "../../images/raeanna3.png";
import CS4 from "../../images/raeanna4.png";
import CS7 from "../../images/raeanna7.png";
import CS8 from "../../images/raeanna8.png";
import CS9 from "../../images/raeanna9.png";
import CS10 from "../../images/raeanna10.png";
import CS11 from "../../images/raeanna11.png";
import PB from "../../images/parkwaybanner.png";
import NAB from "../../images/nathanappbanner.png";

export default class Raeanna extends Component {
  render() {
    return (
      <Container fluid className="whitebg">
        <Helmet>
          <meta charset="utf-8" />
          <title>
            Aorthar | Creative Agency | Brand Identity | Software Development{" "}
          </title>
        </Helmet>
        <img src={HeroImage} alt="" className="gunner" />
        <Container className="">
          <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
            <Row className="pt-5 pb-1">
              <Col xs={12} md={6} sm={12}>
                <h2 className="bigText">
                  <span className="blackText">Our Approach</span>
                </h2>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <div className="a-wwa-caption smallestText blackText b4 montserrat">
                  Aorthar has delivered sterling service to a wide array of
                  businesses in a variety of industries, leaving a trail of
                  thoroughly satisfied clients. Across every engagement, there
                  is one in common, irrepressible theme: out commitment to
                  excellence and branding that looks so real; it lives. Here
                  some of our previous works.
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={6}>
                <img src={CS1} alt="" className="gunner" />
              </Col>
              <Col md={6}>
                <img src={CS2} alt="" className="gunner" />
              </Col>
              <Col md={6}>
                <img src={CS3} alt="" className="gunner" />
              </Col>
              <Col md={6}>
                <img src={CS4} alt="" className="gunner" />
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
            <Row className="pt-5 pb-5">
              <Col xs={12} md={12} sm={12} className="pb-5">
                <h2 className="bigText">
                  <span className="blackText">Our Approach</span>
                </h2>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <div className="a-wwa-caption smallestText blackText b4 montserrat">
                  Aorthar has delivered sterling service to a wide array of
                  businesses in a variety of industries, leaving a trail of
                  thoroughly satisfied clients. Across every engagement, there
                  is one in common, irrepressible theme: out commitment to
                  excellence and branding that looks so real; it lives. Here
                  some of our previous works.
                </div>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <div className="a-wwa-caption smallestText blackText b4 montserrat">
                  Aorthar has delivered sterling service to a wide array of
                  businesses in a variety of industries, leaving a trail of
                  thoroughly satisfied clients. Across every engagement, there
                  is one in common, irrepressible theme: out commitment to
                  excellence and branding that looks so real; it lives. Here
                  some of our previous works.
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="raeannabg pt-3 pb-5">
            <Row>
              <Col md={6}>
                <img src={CS7} alt="" className="gunner" />
              </Col>
              <Col md={6}>
                <img src={CS8} alt="" className="gunner" />
              </Col>
              <Col md={12}>
                <img src={CS9} alt="" className="gunner" />
              </Col>
            </Row>
          </Col>
          
          <Col>
            <Row>
                <Col md={6}>
                  <img src={CS10} alt="" className="gunner" />
                </Col>
                <Col md={6}>
                  <h2 className="bigText mt-5">
                    <span className="blackText">Our <br className="break"/> Approach</span>
                  </h2>
                  <p className="smallestText blackText b4 montserrat  doown">
                    Aorthar has delivered sterling service to a wide array of businesses in 
                    a variety of industries, leaving a trail of thoroughly satisfied clients. 
                    Across every engagement, there is one in common, irrepressible theme: out 
                    commitment to excellence and branding that looks so real; it lives. Here 
                    some of our previous works.
                  </p>
                </Col>
                <Col md={12}>
                  <img src={CS11} alt="" className="gunner" />
                </Col>
              </Row>
          </Col>

          <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} className="upp pb-5" >
            <p className="bigText blackText upp">Check others</p>
            <Row>
              <a href="/parkway" >
                <div className="a-previous-works1">
                  <img src={PB} alt="" className="gunner" />
                </div>
              </a>
              <a href="/nathanapp" >
                <div className="a-previous-works1">
                  <img src={NAB} alt="" className="gunner" />
                </div>
              </a>
            </Row>
          </Col>
        </Container>
      </Container>
    );
  }
}
