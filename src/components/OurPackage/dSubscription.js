import React, { Component } from "react";

import "./OurPackage.css";
import "../GlobalStyles/global.css";

import { Col } from "react-bootstrap";

import Forward from "../../images/forward.png";

export default class DesignSubscription extends Component {
  render() {
    return (
      <Col xs={12} md={12} className="px-0 a-our-packages-heading">
        <h1 className="bigText blackText">
          Subscribe to <span className="green">our</span>
          <br /> Design Package
        </h1>
        <p className="blackText smallestText blackText b4 montserrat">
          We can handle all the media designs your brand would need at anytime
          by subscribing to our subscription service.
        </p>
        <a
          href="/subscription"
          className="a-wwa-readmore green b7 smallestText montserrat"
        >
          Read more <img src={Forward} alt="forward" />
        </a>
      </Col>
    );
  }
}
