import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
// import TeamBanner from "../../images/theteam.png";

export default function TheTeamBanner() {
  return (
    <Container fluid>
      <div className="a-the-team-banner ptsm team-wrapper">
        {/* <img src={TeamBanner} alt="" className="style" /> */}
        {/* <div className="team-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut impedit praesentium magnam quam quod eum quia amet. Soluta nostrum voluptatibus voluptas ipsa placeat id aliquam excepturi deleniti asperiores. Hic?</div> */}
        <Col className="team-caption">
          <Row>
            <Col md={2}></Col>
            <Col md={4}>
                <h2 className="bigText">
                  <span className="bigText white">Meet the</span>
                  <span className="green">Team</span>
                </h2>
            </Col>
            <Col md={4} className="smallestText montserrat pt-3 white">
              One of the keys to Aorthar’s success is its incredibly
              talented team. Our people are extremely skilled and picked
              only from the top stratum in the industry. The highly
              talented and flexible Aorthar team working on this project
              will include:
            </Col>
          </Row>
        </Col>

           {/* <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
            <Row className="pt-5 pb-5">
              <Col xs={12} md={6} sm={12}> */}
      </div>
    </Container>
  );
}
