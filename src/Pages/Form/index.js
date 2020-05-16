import React, { useState } from "react";
import { Helmet } from "react-helmet";

import "./style.css";
import "../../components/GlobalStyles/global.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Form({ props }) {
  const [service, setService] = useState(props.match.params.service);
  return (
    <Container fluid className="whitebg formwrapper pb-5">
      <Helmet>
        <meta charset="utf-8" />
        <title>Aorthar | Creative Agency | Brand Identity | Software Development </title>
      </Helmet>
      <Container>
        <Row className="mt-5">
          <Col
            md={{ span: 8, offset: 1 }}
            className="a-team-card-holder pushtop mt-5"
          >
            <div className="bigText blackText mt-4">Tell us about your project</div>
            <p className="smallestText blackText b4 montserrat mt-2">
              Complete this form and we'll reach out ot you
            </p>
          </Col>
          <Col md={{ span: 6, offset: 1 }} className="a-team-card-holder">
            <form action="" className="mt-5 pb-5 montserrat">
              <Row>
                <Col>
                  <p className="blackText bold">Contact Name</p>
                  <input
                    type="text"
                    placeholder="Your Name or Company Name"
                    className="blackinput smallestText"
                    required
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <p className="blackText bold">Email Address</p>
                  <input
                    type="email"
                    placeholder="youremail@domain.com"
                    className="blackinput smallestText"
                    required
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={6}>
                  <p className="blackText bold">Phone Number</p>
                  <input
                    type="tel"
                    placeholder="+123 4567 890"
                    className="blackinput smallestText"
                    required
                  />
                </Col>
                <Col md={6}>
                  <p className="blackText bold smpt">Project Type</p>
                  {/* <input type="email" placeholder="youremail@domain.com" className="black"/> */}
                  <select
                    className="blackText serviceOptions smallestText"
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
                  <p className="blackText bold">Budget</p>
                  <input
                    type="number"
                    placeholder="How much do you plan to spend"
                    className="blackinput smallestText"
                    required
                  />
                </Col>
                <Col md={6}>
                  <p className="blackText bold smpt">Timeline</p>
                  <input
                    type="letter"
                    placeholder="How long do you want your project to take"
                    className="blackinput smallestText"
                    required
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12}>
                  <p className="blackText bold">Project Documentation</p>
                </Col>
                <Col>
                  <input type="file" className="file" id="file" accept="images/*, .pdf, .doc" required/>
                  <Col>
                    <label for="file" className="smallestText">
                      <span className="green b7">Upload Media</span> &nbsp; 
                      <span className="blackText">(jpeg, pdf, docx)</span>
                    </label>
                  </Col>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <p className="blackText bold">Project Brief</p>
                  <textarea
                    className="blackinput smallestText"
                    placeholder="what else would you like us to know?"
                    required
                  />

                  <button type="submit" className="submitButton mt-3 black">
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
