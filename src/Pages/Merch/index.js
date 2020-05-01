import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

import MerchBody from "../../components/MerchBody/MerchBody";
import MerchBanner from "../../components/MerchBody/MerchBanner";
export default function index() {
  return (
    <Container fluid className="whitebg">
      <Helmet>
        <meta charset="utf-8" />
        <title>Aorthar | Merch</title>
      </Helmet>
      <MerchBanner />
      <MerchBody />
    </Container>
  );
}
