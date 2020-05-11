import React from "react";

import "./style.css";

import { Container } from "react-bootstrap";
import TeamBanner from "../../images/theteam.png";

export default function TheTeamBanner() {
  return (
    <Container fluid>
      <div className="a-the-team-banner">
        <img src={TeamBanner} alt="" />
      </div>
    </Container>
  );
}
