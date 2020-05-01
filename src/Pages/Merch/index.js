import React from "react";
import { Container } from "react-bootstrap";
import MerchBody from "../..//components/MergeBody/MerchBody";

import MerchBanner from "../../components/MergeBody/MerchBanner";
export default function index() {
  return (
    <Container fluid className="whitebg">
      <MerchBanner />
      <MerchBody />
    </Container>
  );
}
