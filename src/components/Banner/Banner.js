import React, { Component } from "react";

// import  { Link }  from 'react-router-dom';
import { Container, Row, Col, Dropdown } from "react-bootstrap";

import "../GlobalStyles/global.css";
import "./Banner.css";

// import HeroImg from "../../images/heroImg.png";
import HeroImgD from "../../images/heroImgD.png";
import Company1 from "../../images/company1.png";
import Company2 from "../../images/company2.png";
import Company3 from "../../images/company3.png";
import p1 from "../../images/person2.png";

// import Fade from 'react-reveal/Fade';
import Bounce from "react-reveal/Bounce";

export default class Banner extends Component {
  services = [
    "Branding and Design",
    "UI/UX",
    "Content Marketing",
    "Social Media Management",
    "Motion Graphics",
    "Software Development",
  ];
  render() {
    return (
      <Container fluid className="whitebg">
        <Container className="a-banner">
          <Row className="a-banner-wrapper justify-content-md-center">
            <Col md={4} className="a-banner-heroImg">
              <Bounce duration={4000} left>
                <Row className="justify-content-md-center heroheroL">
                  <img src={p1} alt="Hero Img" className="a-banner-heroImg" />
                </Row>
                <Row className="justify-content-md-center heroheroD">
                  <img
                    src={HeroImgD}
                    alt="Hero Img"
                    className="a-banner-heroImgD"
                  />
                </Row>
              </Bounce>
            </Col>
            <Col md={6} className="a-banner-caption">
              <Bounce duration={4000} right>
                <h2 className="bigText">
                  <span className="blackText">Craft your</span>
                  <span className="green"> Identity</span>
                </h2>
                <p className="smallestText blackText b4 montserrat pb-3">
                  We will help you deliver a unique outlook, communicate values
                  that will pierce the heart of your targets, in a perfectly
                  relatable and compelling manner.
                </p>

                <Dropdown>
                  <Dropdown.Toggle
                    className="service"
                    variant="default"
                    id="dropdown-basic"
                  >
                    Select a service
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="service_menu">
                    {this.services.map((service, i) => (
                      <Dropdown.Item
                        key={i}
                        href={
                          "/Form" + (service === "UI/UX" ? "uiux" : service)
                        }
                      >
                        {service}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Bounce>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center a-banner-trusted-brands whitebg">
            <Col md={3} xs={12} className="a-banner-brands-caption blackText">
              <div className="montserrat brands-sm">
                These brands have trusted us --
              </div>
            </Col>
            <Col md={4}>
              <img
                src={Company1}
                alt="Company1"
                className="a-banner-company-img"
              />
              <img
                src={Company2}
                alt="Company2"
                className="a-banner-company-img"
              />
              <img
                src={Company3}
                alt="Company3"
                className="a-banner-company-img"
              />
            </Col>
          </Row>
        </Container>
        <Row className="a-banner-pattern"></Row>
      </Container>
    );
  }
}
