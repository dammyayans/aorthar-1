import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";
// import Ben10 from "../../images/Ben10.png";
import "../../components/GlobalStyles/global.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Form(props) {
  return (
    <Container fluid className="formwrapper pb-5 whitebg blackText">
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Aorthar | Creative Agency | Brand Identity | Software Development{" "}
        </title>
      </Helmet>
      
      <Container>
        <Row className="mt-5">
            <Col md={8}>
              <Col
                className="a-team-card-holder pushtop mt-5"
              >
                <div className="bigText mt-4">We'll love to have you too</div>
                <p className="smallestText b4 montserrat mt-2">
                  Complete this form and we'll reach out ot you
                </p>
              </Col>
              <Col className="a-team-card-holder">
                <form action="" className="mt-5 pb-5 montserrat whiteText">

                  <Row>
                    <Col md={8}>
                      <p className="bold blackText">Full Name</p>
                      <input
                        type="text"
                        placeholder="Your name goes here"
                        className="blackinput smallestText"
                        required
                      />
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col md={8}>
                      <p className="bold blackText">Email Address</p>
                      <input
                        type="email"
                        placeholder="youremail@domain.com"
                        className="blackinput smallestText"
                        required
                      />
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col md={4}>
                      <p className="bold blackText">Phone Number</p>
                      <input
                        type="tel"
                        placeholder="+123 4567 890"
                        className="blackinput smallestText"
                        required
                      />
                    </Col>
                    <Col md={4}>
                      <p className="bold smpt blackText">Upload Resume</p>
                      <input type="file" className="file" id="file" accept="images/*, .pdf, .doc, .docx" required/>
                      <label for="file" className="smallestText uploadColor">Choose File</label>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={8}>
                        <p className="blackText bold">Cover Letter</p>
                        <textarea
                          className="blackinput smallestText textarea"
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
            </Col>
          <Col md={4} className="ben"></Col>
        </Row>
      </Container>
    </Container>
  );
}
