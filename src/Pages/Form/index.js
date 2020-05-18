import React, { useState } from "react";
import { Helmet } from "react-helmet";

import "./style.css";
import "../../components/GlobalStyles/global.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Form({ props }) {
  const [formInput, setFormInput] = useState({
    customername: "",
    email: "",
    phonenum: "",
    service: props.match.params.service ? props.match.params.service : null,
    budget: "",
    projectbrief: "",
    timeline: "",
    projectdoc: "",
  });
  const handleSumbit = (e) => {
    e.preventDefault();
    setFormInput({
      customername: "",
      email: "",
      phonenum: "",
      service: "",
      budget: "",
      projectbrief: "",
      timeline: "",
      projectdoc: "",
    });
    console.log(formInput);

    props.history.push(`/confirmation/name=${formInput.customername}`);
  };
  return (
    <Container fluid className="whitebg formwrapper pb-5">
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Aorthar | Creative Agency | Brand Identity | Software Development{" "}
        </title>
      </Helmet>
      <Container>
        <Row className="mt-5">
          <Col
            md={{ span: 8, offset: 1 }}
            className="a-team-card-holder pushtop mt-5"
          >
            <div className="bigText blackText mt-4">
              Tell us about your project
            </div>
            <p className="smallestText blackText b4 montserrat mt-2">
              Complete this form and we'll reach out ot you
            </p>
          </Col>
          <Col md={{ span: 6, offset: 1 }} className="a-team-card-holder">
            <form
              onSubmit={(e) => handleSumbit(e)}
              className="mt-5 pb-5 montserrat"
            >
              <Row>
                <Col>
                  <p className="blackText bold">Contact Name</p>
                  <input
                    type="text"
                    placeholder="Your Name or Company Name"
                    className="blackinput smallestText"
                    required
                    value={formInput.customername}
                    onChange={(e) =>
                      setFormInput({
                        ...formInput,
                        customername: e.target.value,
                      })
                    }
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
                    value={formInput.email}
                    onChange={(e) =>
                      setFormInput({ ...formInput, email: e.target.value })
                    }
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
                    value={formInput.phonenum}
                    onChange={(e) =>
                      setFormInput({ ...formInput, phonenum: e.target.value })
                    }
                    required
                  />
                </Col>
                <Col md={6}>
                  <p className="blackText bold smpt">Project Type</p>
                  {/* <input type="email" placeholder="youremail@domain.com" className="black"/> */}
                  <select
                    className="blackText serviceOptions smallestText"
                    value={formInput.service}
                    onChange={(e) =>
                      setFormInput({ ...formInput, service: e.target.value })
                    }
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
                    value={formInput.budget}
                    onChange={(e) =>
                      setFormInput({ ...formInput, budget: e.target.value })
                    }
                  />
                </Col>
                <Col md={6}>
                  <p className="blackText bold smpt">Timeline</p>
                  <input
                    type="letter"
                    placeholder="How long do you want your project to take"
                    className="blackinput smallestText"
                    required
                    value={formInput.timeline}
                    onChange={(e) =>
                      setFormInput({ ...formInput, timeline: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12}>
                  <p className="blackText bold mb-5">Project Documentation</p>
                </Col>
                <Col md={12}>
                  <input
                    type="file"
                    className="file"
                    id="file"
                    accept="images/*, .pdf, .doc"
                    required
                    value={formInput.projectdoc}
                    onChange={(e) =>
                      setFormInput({ ...formInput, projectdoc: e.target.value })
                    }
                  />
                  <Col>
                    <label htmlFor="file" className="smallestText">
                      <span className="green b7">Upload Media</span> &nbsp;
                      <span className="blackText upload">
                        (jpeg, pdf, docx)
                      </span>
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
                    value={formInput.projectbrief}
                    onChange={(e) =>
                      setFormInput({
                        ...formInput,
                        projectbrief: e.target.value,
                      })
                    }
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
