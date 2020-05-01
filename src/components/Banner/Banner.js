import React, { Component } from "react";

import { Container, Row, Col, Dropdown } from "react-bootstrap";

import "../GlobalStyles/global.css";
import "./Banner.css";

import HeroImgL from "../../images/Damola.png";
import Company1 from "../../images/company1.png";
import Company2 from "../../images/company2.png";
import Company3 from "../../images/company3.png";

import Fade from "react-reveal/Fade";

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
            <Col md={6} sm={12} className="a-banner-heroImg">
              <Fade duration={1000} bottom>
                <Row className=" d-flex mr-md-2 justify-content-md-end justify-content-sm-center heroheroL">
                  <img
                    src={HeroImgL}
                    alt="Hero Img"
                    className="a-banner-heroImg"
                  />
                </Row>
                <Row className="justify-content-md-center heroheroD">
                  <img
                    src={HeroImgL}
                    alt="Hero Img"
                    className="a-banner-heroImgD"
                  />
                </Row>
              </Fade>
            </Col>
            <Col md={6} className="a-banner-caption">
              <Fade duration={1500} bottom>
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
              </Fade>
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
