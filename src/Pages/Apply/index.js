import React, { useState } from "react";
import { Helmet } from "react-helmet";

import "./style.css";
import "../../components/GlobalStyles/global.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Form(props) {
  const [service, setService] = useState(props.match.params.service);
  return (
    <Container fluid className="formwrapper pb-5 greenbg whiteText">
      <Helmet>
        <meta charset="utf-8" />
        <title>Aorthar | Join the Team </title>
      </Helmet>
      <Container>
        <Row>
          <Col
            md={{ span: 8, offset: 1 }}
            className="a-team-card-holder pushtop"
          >
            <div className="bigText">Tell us about your project</div>
            <p className="smallestText b4 montserrat mt-2">
              Complete this form and we'll reach out ot you
            </p>
          </Col>
          <Col md={{ span: 6, offset: 1 }} className="a-team-card-holder">
            <form action="" className="mt-5 pb-5 montserrat whiteText">
              <Row>
                <Col>
                  <p className="bold">Contact Name</p>
                  <input
                    type="text"
                    placeholder="Your Name or Company Name"
                    className="black smallestText applyInput"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <p className="bold">Email Address</p>
                  <input
                    type="email"
                    placeholder="youremail@domain.com"
                    className="black smallestText applyInput"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={6}>
                  <p className="bold">Phone Number</p>
                  <input
                    type="tel"
                    placeholder="+123 4567 890"
                    className="black smallestText applyInput"
                  />
                </Col>
                <Col md={6}>
                  <p className="bold">Project Type</p>
                  {/* <input type="email" placeholder="youremail@domain.com" className="black"/> */}
                  <select
                    className="serviceOptions smallestText applyInput"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="Branding and Design">
                      Branding and Design
                    </option>
                    <option value="uiux">UI/UX</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Social Media Management">
                      Social Media Management
                    </option>
                    <option value="Motion Graphics">Motion Graphics</option>
                    <option value="Software Development">
                      Software Development
                    </option>
                  </select>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={6}>
                  <p className="bold">Budget</p>
                  <input
                    type="number"
                    placeholder="How much do you plan to spend"
                    className="black smallestText applyInput"
                  />
                </Col>
                <Col md={6}>
                  <p className="bold">Timeline</p>
                  <input
                    type="email"
                    placeholder="How long do you want your project to take"
                    className="smallestText applyInput"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <input type="file" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <p className="bold">Project Brief</p>
                  <textarea
                    className="smallestText"
                    placeholder="what else would you like us to know?"
                  />
                  <button
                    type="submit"
                    className="submitButton mt-3 applyButton green"
                  >
                    Submit
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
