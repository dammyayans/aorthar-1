import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../GlobalStyles/global.css";
import "./WhoWeAre.css";

import { Container, Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import Person1 from "../../images/person1.png";
import Person2 from "../../images/person2.png";
import Forward from "../../images/forward.png";

export default class WhoWeAre extends Component {
  render() {
    return (
      <Container fluid className="whitebg">
        <Container className="a-wwa-wrapper">
          <Col md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
            <Row>
              <Col xs={12} md={6} sm={12}>
                <Fade left>
                  <h2 className="bigText">
                    <span className="blackText">Who </span>
                    <span className="green">we </span>
                    <span className="blackText">are</span>
                  </h2>
                </Fade>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <Fade right>
                  <div className="a-wwa-caption smallestText blackText b4 montserrat">
                    We are a team of great minds to serve our consumers with
                    excellent delivery service to achieve the function of usable
                    products and help our client improve in sales and revenue.{" "}
                    <br />
                    <br />
                    <p>
                      We believe not just good, but top-notch branding and
                      design keep your products relevant and enables your
                    </p>
                    <div>
                      <Link
                        to="/"
                        className="a-wwa-readmore green b7 smallestText montserrat"
                      >
                        Read more <img src={Forward} alt="forward" />
                      </Link>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Col>
          <Row className="pt-4">
            <Col md={2}></Col>
            <Col md={8}>
              <Row>
                <Col md={6} className="image">
                  <Fade top>
                    <img src={Person1} alt="Person1" className="image-single" />
                  </Fade>
                </Col>
                <Col md={6} className="image">
                  <Fade bottom>
                    <img src={Person2} alt="Person2" className="image-single" />
                  </Fade>
                </Col>
              </Row>
            </Col>
            <Col md={2} sm={8} className="a-wwa-sideline">
              <Flip top delay={800}>
                <div>
                  <p className="smallText b7 blackText montserrat">
                    Find us on
                  </p>
                  <span className="extraSmallText montserrat">
                    <li>
                      <a
                        href="https://web.facebook.com/Aorthar/"
                        target="blank"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/aorthar/"
                        target="blank"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/aorthar" target="blank">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="/" target="blank">
                        Google
                      </a>
                    </li>
                  </span>
                </div>
              </Flip>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
