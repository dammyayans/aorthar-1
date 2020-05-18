import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

import MerchBody from "../../components/MerchBody/MerchBody";
export default function index({ props }) {
  return (
    <Container fluid className="whitebg">
      <Helmet>
        <meta charset="utf-8" />
        <title>Aorthar | Merch</title>
      </Helmet>
      <MerchBody props={props} />
    </Container>
  );
}
