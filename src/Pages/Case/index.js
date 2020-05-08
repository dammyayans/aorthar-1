import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

import HeroImage from "../../images/Spotlight.png";
import CS1 from "../../images/cs1.png";

export default class Case extends Component {
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
            <Row className="pt-5 pb-5">
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
            <img src={CS1} alt="" className="gunner" />
          </Col>
        </Container>
      </Container>
    );
  }
}
