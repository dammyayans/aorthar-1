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
                <h2>
                  <span className=" bigText blackText">Client Overview</span>
                  <p className="smallestText blackText b8">Nathan App </p>
                </h2>
              </Col>
              <Col xs={12} md={6} sm={12}>
                <div className="a-wwa-caption smallestText blackText b4 montserrat text-justify">
                  Nathan App - an ecommerce mobile application. We are
                  very known for interface designs especially when you want
                  to make it high profile type. Our team carried out this
                  distinct and usable applications along side research and
                  User Experience
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
              <Col xs={12} md={6} sm={12} className="montserrat smallestText blackText text-justify">
                  <span className="">
                    <span className="b8">1. Interpreting Project Brief</span><br/>
                      To analyse requirements of the Nathan App, we followed
                      modern standard user research methods. We Conducted
                      brainstorming sessions with clients and as a team to show
                      them existing products in line with their market to get their
                      feedback.
                  </span>
                  <br/><br/>
                  <span>
                    <span className="b8">2. Research</span><br/>
                    Our Design Team Kept their eyes on the latest UI trends,
                    design principles and your existing user experience
                    guidelines.
                    While doing our research, we started exploring the
                    possibilities in layouts and options to provide the desired
                    experience. We studied their competitors’ approaches,
                    similar features in their market, checked up latest UI/UX
                    trends, to establish a good UX guidelines.

                  </span><br/><br/>
                  <span>
                    <span className="b8">3. Wireframes and Sketch</span><br/>
                    Our team engaged in paper sketches, white board flows
                    and wireframes to share with our client before going
                    forward to design User Interface
                  </span><br/><br/>
              </Col>
            </Row>
          </Col>

          <Col className="pt-5">
            <img src={NA2} alt="" className="style" />
          </Col>
          <Col md={{span: 10, offset: 1}}>
            <Row>
              <Col md={6} sm={12}>
                <div className="smallestText blackText b4 montserrat pt-4 text-justify">
                  <span className="b8">4. Design</span><br/>
                    We finally got to define the layout and flow of the required
                    interface, we created mockups to great-looking images
                    with theme and styles applied to them.
                    We prepared and shared the design specifications
                    (principles, guidelines, colors, typography, iconography) to
                    Development team
                </div>
              </Col>
              
              <Col md={6} sm={12}>
                <div className="smallestText blackText b4 montserrat pt-4 text-justify">
                  <span className="b8">5. Implement and Development</span><br/>
                  Our technical team started with the implementation of the
                  whole interface.
                  The Development Team built back end functionality first
                  and connects it with UI. The Implementation of back-end
                  functionality and front interface started with complete
                  functionality and experience.
                </div>
              </Col>
            </Row>
          </Col>

          <Col>
            <img src={NA3} alt="" className="style upp" />
          </Col>

          <Col md={{ span: 10, offset: 1 }}>
            <Row className="pt-4 pb-4">
              <Col sm={6}>
                <h2 className="bigText upp">
                  <span className="blackText">Icongraphy</span>
                </h2>
                <div className="smallestText blackText b4 montserrat pt-4 text-justify">
                  Using iconography to enhance UX design. Iconography is a 
                  visual language used to represent features, functionality, or 
                  content. Icons are meant to be simple, visual elements that 
                  are recognized and understood immediately.
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
                    <img src={NA6} alt="" className="smt"/>
                  </Col>
                  <Col md={10} className="smallestText blackText b4 montserrat pb-3 text-justify smt">
                    Understanding who our project audience was very crucial,
                    knowing how they interpret the icons you've used is
                    absolutely key. We don’t want icons that are beautifully
                    designed but could have so many different meanings, and
                    ambiguity leads to frustration.
                  </Col>
                </Row>
                
                <Row>
                  <Col md={2}>
                    <img src={NA7} alt="" className="smt"/>
                  </Col>
                  <Col md={10} className="smallestText blackText b4 montserrat pb-3 text-justify smt">
                   We conducted a some questionnaire that gave us the best
                    insight into how your target audience thinks and operates.
                    We never assumed they know or they think they
                    understand the icon meanings; that was the result from
                    the survey, engaging conversation, and testing.
                  </Col>
                </Row>
                
                <Row>
                  <Col md={2}>
                    <img src={NA8} alt="" className="smt"/>
                  </Col>
                  <Col md={10} className="smallestText blackText b4 montserrat pb-3 text-justify smt">
                    We used a collection (family) of icons that all look and feel
                    as if they belong with each other creates a degree of
                    consistency, which equals uniformity. Integrating this into
                    an organisation’s style guide emits a strong brand identity.
                  </Col>
                </Row>
               
                <Row>
                  <Col md={2}>
                    <img src={NA9} alt="" className="smt"/>
                  </Col>
                  <Col md={10} className="smallestText blackText b4 montserrat pt-md-2 pb-md-3 text-justify smt">
                    The scale of our work dictates what the combination of icon
                    and words get our message across faster. Icons have the
                    unique ability of breaking down language barriers, we
                    believe Nathan app can go as far as reaching global market
                    and we need to eliminate any type of language barrier.
                  </Col>
                </Row>

              </Col>
              <Col sm={6}>
                <img src={NA4} alt="" className="style" />
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
            </Row>
          </Col>

        </Container>
      </Container>
    );
  }
}
