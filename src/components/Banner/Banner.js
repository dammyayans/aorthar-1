import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Modal, Dropdown } from "react-bootstrap";
import "../GlobalStyles/global.css";
import "./Banner.css";

import HeroImg from "../../images/heroImg.png";
import HeroImgD from "../../images/heroImgD.png";
import Company1 from "../../images/company1.png";
import Company2 from "../../images/company2.png";
import Company3 from "../../images/company3.png";
import Company4 from "../../images/company4.png";
import Company5 from "../../images/company5.png";
import PlayIcon from "../../images/playIcon.png";
import video from "../../images/Aorthar Playback.mp4";

import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 50px;
  height: 5rem;
  width: 100%;
`;
const CarouselUI = ({ children }) => (
  <SliderContainer>{children}</SliderContainer>
);
const Carousel = makeCarousel(CarouselUI);
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="/#"
    ref={ref}
    className="gStarted extraSmallText green b7"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));
export default class Banner extends Component {
  state = {
    play: false,
  };

  CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">{children}</ul>
        </div>
      );
    }
  );

  services = [
    "Branding and Design",
    "UI/UX",
    "Content Marketing",
    "Social Media Management",
    "Motion Graphics",
    "Software Development",
  ];
  handleClose = () => this.setState({ play: false });
  handleShow = () => this.setState({ play: true });
  render() {
    return (
      <Container fluid className="whitebg">
        <Modal
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          size="lg"
          show={this.state.play}
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton className="greybg">
            <Modal.Title>Aorthar</Modal.Title>
          </Modal.Header>
          <Modal.Body className="greybg">
            <video
              src={video}
              autoPlay
              controls
              style={{ height: "100%", width: "100%" }}
            />
          </Modal.Body>
        </Modal>
        <Container className="a-banner">
          <Row className="a-banner-wrapper justify-content-md-center">
            <Col md={4} sm={12} className="a-banner-heroImg">
              <Fade duration={1000} bottom>
                <Row className="d-flex mr-md-2 justify-content-md-end justify-content-sm-center heroheroL">
                  {/* <img src={p1} alt="Hero Img" className="a-banner-heroImg" /> */}
                  <img
                    src={HeroImg}
                    alt="Hero Img"
                    className="a-banner-heroImgL"
                  />
                </Row>
                <Row className="d-flex mr-md-2 justify-content-md-end justify-content-sm-center heroheroD">
                  <img
                    src={HeroImgD}
                    alt="Hero Img"
                    className="a-banner-heroImgD"
                  />
                </Row>
              </Fade>
            </Col>
            <Col md={6} className="a-banner-caption p">
              <Fade duration={1500} bottom>
                <h2 className="bigText">
                  <span className="blackText">Craft your </span>
                  <br className="break" />
                  {/* <span className="green"> Identity</span> */}
                  <span className="green">
                    <ReactTypingEffect
                      text={["Identity", "Message", "Brand"]}
                      speed={150}
                      eraseDelay={700}
                      typingDelay={300}
                    />
                  </span>
                </h2>
                <p className="smallestText blackText b4 montserrat pb-3">
                  We will help you deliver a unique outlook, communicate values
                  that will pierce the heart of your targets, in a perfectly
                  relatable and compelling manner.
                </p>
                <div className="d-flex align-items-center dropdownContainer">
                  <Fade>
                    <Dropdown>
                      <Dropdown.Toggle
                        as={CustomToggle}
                        id="dropdown-custom-components"
                      >
                        Get Started
                      </Dropdown.Toggle>
                      <div>
                        <Dropdown.Menu
                          as={this.CustomMenu}
                          className="greybg dropmenu"
                        >
                          {this.services.map((service, i) => (
                            <Link
                              key={i}
                              className="greenText"
                              to={
                                "/Form" +
                                (service === "UI/UX" ? "uiux" : service)
                              }
                            >
                              <li className="dropli">{service}</li>
                            </Link>
                          ))}
                        </Dropdown.Menu>
                      </div>
                    </Dropdown>
                  </Fade>
                  <span className="pulse" onClick={this.handleShow}>
                    <img src={PlayIcon} alt="" className="playButton" />
                  </span>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-md-center a-banner-trusted-brands greybg">
          <Col
            md={3}
            xs={12}
            sm={5}
            className="a-banner-brands-caption blackText"
          >
            <div className="montserrat brands-sm">
              These brands have trusted us --
            </div>
          </Col>
          <Col md={4} sm={5} xs={12} className="mt-2">
            <Carousel defaultWait={5000}>
              <Slide left duration={3000}>
                <div>
                  <Slide left duration={1000}>
                    <img
                      src={Company1}
                      alt="Company1"
                      className="a-banner-company-img"
                    />
                  </Slide>
                  <Slide left duration={1000}>
                    <img
                      src={Company2}
                      alt="Company1"
                      className="a-banner-company-img"
                    />
                  </Slide>
                </div>
              </Slide>
              <Slide left duration={3000}>
                <div>
                  <Slide left duration={1000}>
                    <img
                      src={Company3}
                      alt="Company1"
                      className="a-banner-company-img"
                    />
                  </Slide>
                  <Slide left duration={1000}>
                    <img
                      src={Company4}
                      alt="Company2"
                      className="a-banner-company-img"
                    />
                  </Slide>
                </div>
              </Slide>
              <Slide left duration={3000}>
                <div>
                  <Slide left duration={1000}>
                    <img
                      src={Company5}
                      alt="Company1"
                      className="a-banner-company-img"
                    />
                  </Slide>

                  <Slide left duration={1000}>
                    <img
                      src={Company1}
                      alt="Company3"
                      className="a-banner-company-img"
                    />
                  </Slide>
                </div>
              </Slide>
            </Carousel>
          </Col>
        </Row>
        <Row className="a-banner-pattern"></Row>
      </Container>
    );
  }
}
