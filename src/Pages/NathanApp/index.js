import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

import HeroImage from "../../images/nathanappbanner.png";
import NA1 from "../../images/nathanapp1.png";
import NA2 from "../../images/nathanapp2.png";
import NA3 from "../../images/nathanapp3.png";
import NA4 from "../../images/nathanapp4.png";
import NA5 from "../../images/nathanapp5.png";
import NA6 from "../../images/nathanapp6.png";
import NA7 from "../../images/nathanapp7.png";
import NA8 from "../../images/nathanapp8.png";
import NA9 from "../../images/nathanapp9.png";
import PB from "../../images/parkwaybanner.png";
import RA from "../../images/raeannabanner.png";

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
          <Row>

            <Col md={6} sm={12}>
              <div className="smallestText blackText b4 montserrat pt-4">
                Aorthar has delivered sterling service to a wide array of
                businesses in a variety of industries, leaving a trail of
                thoroughly satisfied clients. Across every engagement, there
                is one in common, irrepressible theme: out commitment to
                excellence and branding that looks so real; it lives. Here
                some of our previous works.
              </div>
            </Col>
            
            <Col md={6} sm={12}>
              <div className="smallestText blackText b4 montserrat pt-4">
                Aorthar has delivered sterling service to a wide array of
                businesses in a variety of industries, leaving a trail of
                thoroughly satisfied clients. Across every engagement, there
                is one in common, irrepressible theme: out commitment to
                excellence and branding that looks so real; it lives. Here
                some of our previous works.
              </div>
            </Col>
          
            <Col md={6} sm={12}>
              <div className="smallestText blackText b4 montserrat pt-4">
                Aorthar has delivered sterling service to a wide array of
                businesses in a variety of industries, leaving a trail of
                thoroughly satisfied clients. Across every engagement, there
                is one in common, irrepressible theme: out commitment to
                excellence and branding that looks so real; it lives. Here
                some of our previous works.
              </div>
            </Col>
            
            <Col md={6} sm={12}>
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

          <Col>
            <img src={NA3} alt="" className="style upp" />
          </Col>

          <Col md={{ span: 10, offset: 1 }}>
            <Row className="pt-4 pb-4">
              <Col sm={6}>
                <h2 className="bigText upp">
                  <span className="blackText">Icongraphy</span>
                </h2>
                <div className="smallestText blackText b4 montserrat pt-4">
                  Aorthar has delivered sterling service to a wide array of <br/>
                  businesses in a variety of industries, leaving a trail of <br/>
                  thoroughly satisfied clients. Across every engagement, <br/>
                  there is one in common, irrepressible theme: out <br/>
                  commitment to excellence and branding that looks so real; <br/>
                  it lives. Here some of our previous works.
                </div>
              </Col>
              <Col sm={6}>
                <img src={NA5} alt=""  className="gunner"/>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 10, offset: 1 }} className="upp">
            <Row>
              <Col sm={6}>
               
                <Row>
                  <Col md={2}>
                    <img src={NA6} alt=""/>
                  </Col>
                  <Col md={10} className="smallestText blackText b4 montserrat pb-3">
                    Aorthar has delivered sterling service to a wide array of 
                    businesses in a variety of industries, leaving a trail of 
                    thoroughly satisfied clients. Across every engagement, 
                    there is one in common, irrepressible theme: out 
                    commitment to excellence and branding that looks so real; 
                    it lives. Here some of our previous works.
                  </Col>
                </Row>
                
                <Row>
                  <Col md={2}>
                    <img src={NA7} alt=""/>
                  </Col>
                  <Col md={10} className="smallestText blackText b4 montserrat pb-3">
                    Aorthar has delivered sterling service to a wide array of 
                    businesses in a variety of industries, leaving a trail of 
                    thoroughly satisfied clients. Across every engagement, 
                    there is one in common, irrepressible theme: out 
                    commitment to excellence and branding that looks so real; 
                    it lives. Here some of our previous works.
                  </Col>
                </Row>
                
                <Row>
                  <Col md={2}>
                    <img src={NA8} alt=""/>
                  </Col>
                  <Col md={10} className="smallestText blackText b4 montserrat pb-3">
                    Aorthar has delivered sterling service to a wide array of 
                    businesses in a variety of industries, leaving a trail of 
                    thoroughly satisfied clients. Across every engagement, 
                    there is one in common, irrepressible theme: out 
                    commitment to excellence and branding that looks so real; 
                    it lives. Here some of our previous works.
                  </Col>
                </Row>
               
                <Row>
                  <Col md={2}>
                    <img src={NA9} alt=""/>
                  </Col>
                  <Col md={10} className="smallestText blackText b4 montserrat pt-md-2 pb-md-3">
                    Aorthar has delivered sterling service to a wide array of 
                    businesses in a variety of industries, leaving a trail of 
                    thoroughly satisfied clients. Across every engagement, 
                    there is one in common, irrepressible theme: out 
                    commitment to excellence and branding that looks so real; 
                    it lives. Here some of our previous works.
                  </Col>
                </Row>

              </Col>
              <Col sm={6}>
                <img src={NA4} alt=""/>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} className="upp pb-5" >
            <p className="bigText blackText upp">Check others</p>
            <Row>
              <a href="/raeanna" >
                <div className="a-previous-works1">
                  <img src={RA} alt="" className="gunner" />
                </div>
              </a>
              <a href="/parkway" >
                <div className="a-previous-works1">
                  <img src={PB} alt="" className="gunner" />
                </div>
              </a>
              {/* <a href="/" className="immmm">
                <span className="">
                    lorem
                </span>
              </a> */}
            </Row>
          </Col>

        </Container>
      </Container>
    );
  }
}
