import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../GlobalStyles/global.css";
import "./WhoWeAre.css";

import { Container, Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import Person4 from "../../images/pelumis.png";
import Person3 from "../../images/Person3.png";
import Forward from "../../images/forward.png";

export default class WhoWeAre extends Component {
  render() {
    return (
      <Container fluid className="whitebg">
        <Container className="a-wwa-wrapper">
          <Col md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
            <Row>
              <Col xs={12} md={6} sm={12}>
                <Fade bottom>
                  <h2 className="bigText">
                    <span className="blackText">Our </span> <br className="break" />
                    <span className="green">Story</span>
                  </h2>
                </Fade>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <Fade bottom>
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
                        to="/theteam"
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
                  <Fade bottom>
                    <img src={Person3} alt="Person1" className="image-single" />
                  </Fade>
                </Col>
                <Col md={6} className="image">
                  <Fade bottom delay={200}>
                    <img src={Person4} alt="Person2" className="image-single" />
                  </Fade>
                </Col>
              </Row>
            </Col>
            <Col md={2} sm={8} className="a-wwa-sideline">
              <Flip top delay={600}>
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
                      <a href="https://www.google.com/search?q=aorthar&oq=aorthar&aqs=chrome..69i57j69i59l2j69i60l5.5559j0j7&sourceid=chrome&ie=UTF-8" target="blank">
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
