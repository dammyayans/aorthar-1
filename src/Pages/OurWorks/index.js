import React from "react";
import "./style.css";
import "../../components/GlobalStyles/global.css";
import Arrow from "../../images/forward.png";
import { Container, Row, Col } from "react-bootstrap";
import GetStarted from "../../components/GetStarted/GetStarted";
import PB from "../../images/parkwaybanner.png";
import NAB from "../../images/nathanappbanner.png";
import RB from "../../images/raeannabanner.png";

export default function index() {
  return (
    <Container fluid className="whitebg">
      <Container>
        <Col
          md={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          className="push2"
        >
          <Row>
            <Col xs={12} md={6} sm={12}>
              <h2 className="bigText">
                <span className="blackText">Branding so </span>
                <span className="green">real, </span> <br />
                <span className="blackText">it lives</span>
              </h2>
            </Col>
            <Col xs={12} md={6} sm={12}>
              <div className="a-wwa-caption smallestText blackText b4 montserrat">
                Aorthar has delivered sterling service to a wide array of
                businesses in a variety of industries, leaving a trail of
                thoroughly satisfied clients. Across every engagement, there is
                one in common, irrepressible theme: out commitment to excellence
                and branding that looks so real; it lives. Here some of our
                previous works.
              </div>
            </Col>
          </Row>
          <Row>
            <a href="/parkway">
              <div className="a-previous-works1">
                <img src={PB} alt="" className="imm" />
                <span className="float-right mt-2 ">
                  <img src={Arrow} alt="" />
                </span>
              </div>
            </a>
            <a href="/NathanApp">
              <div className="a-previous-works1">
                <img src={NAB} alt="" className="imm" />
                <span className="float-right mt-2">
                  <img src={Arrow} alt="" />
                </span>
              </div>
            </a>
            <a href="/Raeanna">
              <div className="a-previous-works1">
                <img src={RB} alt="" className="imm" />
                <span className="float-right mt-2">
                  <img src={Arrow} alt="" />
                </span>
              </div>
            </a>
          </Row>
        </Col>
        <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
          <Row>
            <Col xs={12} md={6} sm={12}>
              <h1 className="bigText blackText">Our Wide Range of services</h1>
            </Col>
            <Col xs={12} md={6} sm={12}>
              <div className="a-wwa-caption smallestText blackText b4 montserrat">
                Our work range shows how widely capable we are loaded, to help
                the company improve branding and customer engagement, identify
                the process we will take to achieve any specified goal and
                provide samples of what we can do.
              </div>
            </Col>
          </Row>
          <Row className="push montserrat blackText pt-5">
            <Col xs={6} md={3} className="smallestText">
              <h3 className="mediumtext">Branding</h3>
              <li>Visual Branding</li>
              <li>Product Branding</li>
              <li>Event Branding</li>
              <li>Motion Graphics</li>
              <li>Animation</li>
              <li>Graphics Design</li>
              <li>Brand Guide Development</li>
            </Col>
            <Col xs={6} md={3} className="smallestText">
              <h3 className="mediumtext">Product Design</h3>
              <li>Web Design</li>
              <li>App Design</li>
              <li>User Interface Design</li>
              <li>User Experience Design</li>
              <li>Prototyping</li>
              <li>Wireframe</li>
              <li>Wordpress</li>
            </Col>
            <Col xs={6} md={3} className="move smallestText">
              <h3 className="mediumtext ">Content Marketing</h3>
              <li>Article Writing</li>
              <li>Story Telling</li>
              <li>Content Development</li>
              <li>Social Media Management</li>
            </Col>
            <Col xs={6} md={3} className="move smallestText">
              <h3 className="mediumtext ">Software Development</h3>
              <li>Front End Web Development</li>
              <li>Back End Web Development</li>
              <li>SEO</li>
              <li>Project Management</li>
            </Col>
          </Row>
        </Col>

        <Col
          md={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          className="push2"
        >
          <Row>
            <Col xs={12} md={6} sm={12}>
              <h1 className="bigText blackText">Our creative process</h1>
            </Col>
            <Col xs={12} md={6} sm={12}>
              <div className="a-wwa-caption smallestText blackText b4 montserrat">
                We believe in having all our docks in a row and never misisng
                the details on each project we embark upon. The goalof our
                creative process is to set clear milestones and deadlines,
                ensuring timely delivery of the project.
              </div>
            </Col>
          </Row>
          <Row className="a-our-work-process smallText blackText b8">
            <Col xs={6} md={3}>
              <Row>
                <Col md={8}>
                  <span>
                    {" "}
                    Discovery <br /> Meeting
                  </span>
                </Col>
                <Col md={4}>
                  <span>
                    <img src={Arrow} alt="" />
                  </span>
                </Col>
              </Row>
            </Col>

            <Col xs={6} md={3}>
              <Row>
                <Col md={6}>
                  <span>
                    Strategy <br /> initiation
                  </span>
                </Col>
                <Col md={6}>
                  <span>
                    <img src={Arrow} alt="" />
                  </span>
                </Col>
              </Row>
            </Col>

            <Col xs={6} md={3}>
              <Row>
                <Col md={7} className="p-md-0">
                  <span>
                    Project <br />
                    Development
                  </span>
                </Col>
                <Col md={5} className="pl-md-4">
                  <span>
                    <img src={Arrow} alt="" />
                  </span>
                </Col>
              </Row>
            </Col>

            <Col xs={6} md={3}>
              <Row>
                <Col md={12}>
                  <span>
                    Reviews and <br /> Round up
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <GetStarted />
      </Container>
    </Container>
  );
}
