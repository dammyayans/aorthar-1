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
                <h2>
                  <span className=" bigText blackText">Client Overview</span>
                  <p className="smallestText blackText b8">Raeanna Nigeria Limited </p>
                </h2>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <div className="a-wwa-caption smallestText blackText b4 montserrat text-justify">
                  RNL is a telecommunications infrastructure supplier
                  servicing markets in Nigeria and sub-Saharan Africa. The
                  company, ncorporated in the year 2000, has offices and
                  maintenance centers in 45 locations across 27 states in
                  Nigeria.
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
                <div className="a-wwa-caption smallestText blackText b4 montserrat text-justify">
                  The company currently uses a WordPress website. It is
                  usually considered more tasteful and professional to utilize
                  a custom website build instead, especially in view of RNL’s
                  size and track record. The website design is severely limited
                  and is currently lacking in the finesse and class that a
                  custom built website exudes.
                </div>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <div className="a-wwa-caption smallestText blackText b4 montserrat text-justify">
                  Similar to its LinkedIn, Facebook and Twitter posts, RNL’s
                  engagement on these platforms indicates limitations as
                  well. There is an absence of tastefully designed e-flyers and
                  carefully crafted content that drive customer engagement.

                </div>
              </Col>
            </Row>
          </Col>
          <Col className="raeannabg pt-3 pb-5">
            <Row>
              <Col md={{span: 6, offset: 1}}>
                <img src={CS7} alt="" className="gunner" />
                <Col  md={{span: 10, offset: 1}} className="pt-4">
                  <h2 className="bigText">
                      <span className="white pt-3">The Aorthar Difference</span>
                  </h2>
                  <p className="white montserrat smallestText">
                    To help your company elevate its brand and infuse it with
                    vitality, we propose to:
                  </p>
                  <span className="white montserrat smallestText">
                    <span className="b8 montserrat smallestText">1. Redesign your website</span><br/>
                    We implemented top notch UI/UX and providing content
                    that positively glows with RNL’s unique value proposition
                  </span>
                </Col>
              </Col>
              <Col md={4}>
                <img src={CS8} alt="" className="gunner" />
              </Col>
              <Col md={{span: 10, offset: 1}}>
                <img src={CS9} alt="" className="gunner" />
              </Col>
            </Row>
          </Col>
          
          <Col>
            <Row>
                <Col md={6}>
                  <img src={CS10} alt="" className="gunner" />

                </Col>
                <Col  md={5} className="pt-4  smallestText blackText b4 montserrat text-justify">
                  {/* <h2 className="bigText">
                      <span className="blackText #">The Aorthar Difference</span>
                  </h2> */}
                  <span className="smallestText blackText b4 montserrat text-justify pt-3">
                    <span className="b8 montserrat smallestText">2. Social Media Ad</span><br/>
                      We designed tasteful e-flyers for posts on social media.
                  </span><br/><br/>
                  <span className="smallestText blackText b4 montserrat text-justify">
                    <span className="b8 montserrat smallestText">3. Content Creation</span><br/>
                    Create compelling content that impresses the authority of <br/> the RNL brand and communicates the company’s value<br/> proposition.
                  </span><br/><br/>
                  <span className="smallestText blackText b4 montserrat text-justify">
                    <span className="b8 montserrat smallestText">4. Social Media Management</span><br/>
                    We assisted with management of RNL’s customer <br/>engagement platforms, including website and social media.
                  </span><br/><br/>
                  <span className="smallestText blackText b4 montserrat text-justify">
                    <span className="b8 montserrat smallestText">5. Other Design Services</span><br/>
                    Provide such other design and branding services that the <br/>company requires.
                  </span><br/><br/>
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
