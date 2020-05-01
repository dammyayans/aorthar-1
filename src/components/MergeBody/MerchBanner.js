import React from "react";

import "./style.css";

import { Row, Col } from "react-bootstrap";

export default function MerchBanner() {
  return (
    <Row className="a-the-merge-banner">
      <Col md={4} className="merge-banner"></Col>
      <Col md={4} className="merge-banner"></Col>
      <Col md={4} className="merge-banner"></Col>
    </Row>
  );
}
