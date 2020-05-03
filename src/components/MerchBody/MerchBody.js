import React, { useState, useEffect } from "react";

import { Container, Col, Row } from "react-bootstrap";
import LightSpeed from "react-reveal/LightSpeed";
import states from "./states.json";
import shirt from "../../images/AOrthar_Big_icon_green-removebg-preview.png";

import "./style.css";
const MerchBody = () => {
  const [location, setLocation] = useState("");
  const [delivery, setDelivery] = useState(true);
  // const [price, setprice] = useState(3000);
  const [price] = useState(3000);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let dfee = 1000;
    if (location === "Lagos" || delivery === false) {
      dfee = 0;
      setTotal(dfee + price);
    } else {
      setTotal(dfee + price);
    }
  }, [total, location, price, delivery]);
  const wantDelivery = (e) => {
    e.preventDefault();
    setDelivery(!delivery);
  };
  return (
    <Container className="a-case-study-wrapper">
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <Row>
            <Col xs={12} md={6}>
              <LightSpeed left>
                <h3 className="bigText blackText">
                  Our Ambassador, Our friend
                </h3>
              </LightSpeed>
            </Col>
            <Col xs={12} md={6}>
              <LightSpeed right>
                <div className="a-case-study-caption smallestText blackText b4 montserrat">
                  Aorthar has delivered sterling service to a wide array of
                  businesses in a variety of industries, leaving a trail of
                  thoroughly satisfied clients. Acoss every engagement, there is
                  one common, irrespressible theme: Our commitment to
                  execellence and branding that looks so real, it lives. Here's
                  some of our previous work
                </div>
              </LightSpeed>
            </Col>
          </Row>
          <Row>
            <Col md={5} className="d-flex shirt justify-content-center">
              <img src={shirt} alt="aorthar shirt" />
              <p className="blackText bold">The Big Heart</p>
              <div className="color-container">
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
              </div>
            </Col>
            <Col md={7} className="a-team-card-holder">
              <form action="" className="mt-5 pb-5 montserrat">
                <Row>
                  <Col>
                    <p className="blackText bold">Your Full Name*</p>
                    <input
                      type="text"
                      placeholder="Your Name or Company Name"
                      className="black smallestText"
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <p className="blackText bold">Phone Number*</p>
                    <input
                      type="text"
                      placeholder="08100000000"
                      className="black smallestText"
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={6}>
                    <p className="blackText bold">
                      Do you want us to deliver to you
                    </p>
                    <div className="mb-3">
                      <button
                        className={`button mr-2 black ${
                          delivery ? "bg-green" : ""
                        }`}
                        onClick={(e) => wantDelivery(e)}
                      >
                        Yes
                      </button>
                      <button
                        className={`button mr-2 black ${
                          !delivery ? "bg-green" : ""
                        }`}
                        onClick={(e) => wantDelivery(e)}
                      >
                        No
                      </button>
                    </div>
                    <p className="blackText bold">
                      Pickup available at our office. Delivery outside Lagos
                      attracts extra fee
                    </p>
                  </Col>
                  <Col md={6}>
                    <p className="blackText bold">Location</p>
                    <select
                      className="blackText disabled serviceOptions smallestText"
                      value={location}
                      disabled={!delivery}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={6}>
                    <div className="d-flex justify-content-space">
                      <p className="blackText bold">Shirt</p>
                      <p className="blackText bold">N3000</p>
                    </div>
                    <div className="d-flex justify-content-space">
                      <p className="blackText bold">Delivery</p>
                      <p className="blackText bold">
                        {location === "Lagos" || delivery === false
                          ? "N0"
                          : "N1000"}
                      </p>
                    </div>
                    <button type="submit" className="submitButton mt-3 black">
                      I Want this!
                    </button>
                  </Col>
                  <Col md={6} className="d-flex justify-content-center">
                    <h2 className=" green bold">N{total}</h2>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MerchBody;
