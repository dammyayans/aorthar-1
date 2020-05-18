import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import "../../components/GlobalStyles/global.css";
import { Container, Row, Col } from "react-bootstrap";

import Erica from "../../images/person1.png";
import Forward from "../../images/forward.png";

export default function index({ props }) {
  return (
    <Container fluid className="whitebg">
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Aorthar | Creative Agency | Brand Identity | Software Development{" "}
        </title>
      </Helmet>
      <Container className="montserrat">
        <Row>
          <Col
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            className="push3"
          >
            <Row>
              <Col xs={12} md={12} sm={12}>
                <h2 className="bigText blackText">
                  Erica would get back to you
                </h2>
              </Col>
            </Row>
          </Col>
          <Col
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            className="mediumText b7"
          >
            {/* 07059961637 */}
            <Row>
              <Col md={3}>
                <img src={Erica} alt="" className="erica" />
              </Col>
              <Col md={8} className="bold">
                <h3 className="bold blackText">
                  Hi, {" " + props.match.params.name}
                </h3>
                <h3 className="bold blackText">
                  I will send you a response shortly <br />
                  You can also reach me on <br />
                  <span className="greenText">+234 (0) 814 422 8160</span>
                </h3>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="pp text-center">
            <a href="/" className="greenText b7 smallestText montserrat">
              Go Back Home <img src={Forward} alt="" />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
