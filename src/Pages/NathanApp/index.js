import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

import HeroImage from "../../images/nathanappbanner.png";
import NA1 from "../../images/nathanapp1.png";
import NA2 from "../../images/nathanapp2.png";
// import NA3 from "../../images/nathanapp3.png";
import NA4 from "../../images/nathanapp4.png";
import PB from "../../images/parkwaybanner.png";
import RA from "../../images/nathanappbanner.png";

export default class Parkway extends Component {
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
            <Row className="pt-5">
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
            <img src={NA1} alt="" className="gunner" />
          </Col>
          <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
            <Row className="pt-5">
              <Col xs={12} md={6} sm={12}>
                <h2 className="bigText">
                  <span className="blackText">Our Approach</span>
                </h2>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <div className="smallestText blackText b4 montserrat">
                  Aorthar has delivered sterling service to a wide array of
                  businesses in a variety of industries, leaving a trail of
                  thoroughly satisfied clients. Across every engagement, there
                  is one in common, irrepressible theme: out commitment to
                  excellence and branding that looks so real; it lives. Here
                  some of our previous works.
                </div>
                <div className="smallestText blackText b4 montserrat pt-4">
                  Aorthar has delivered sterling service to a wide array of
                  businesses in a variety of industries, leaving a trail of
                  thoroughly satisfied clients. Across every engagement, there
                  is one in common, irrepressible theme: out commitment to
                  excellence and branding that looks so real; it lives. Here
                  some of our previous works.
                </div>
                <div className="smallestText blackText b4 montserrat pt-4">
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

          <Col className="pt-5">
            <img src={NA2} alt="" className="style" />
          </Col>
          <Col className="pt-4">
            <img src={NA2} alt="" className="style" />
            {/* <img src={NA3} alt="" className="style" /> */}
          </Col>

          <Col>
            <Row>
              <Col sm={6}></Col>
              <Col sm={6}>
                <img src={NA4} alt=""/>
              </Col>
            </Row>
          </Col>

          <Col className="pt-5 pb-5">
            <p className="bigText blackText">Check others</p>
            <Row>
              <a href="/parkway" >
                <div className="a-previous-works1">
                  <img src={PB} alt="" className="gunner" />
                </div>
              </a>
              <a href="/nathanapp" >
                <div className="a-previous-works1">
                  <img src={RA} alt="" className="gunner" />
                </div>
              </a>
            </Row>
          </Col>
        </Container>
      </Container>
    );
  }
}
