import React from "react";

import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

import Damola from "../../images/Damola.png";
import Pelumi from "../../images/Pelumi.png";
import Naomi from "../../images/Naomi.png";
import Opeyemi from "../../images/Opeyemi.png";
// import Jolly from '../../images/Jolly.png';
import Erica from "../../images/Erica.png";
// import G1 from "../../images/gallery1.png";
// import G2 from '../../images/gallery2.png'
// import G3 from '../../images/gallery3.png'
import ArrowDown from "../../images/arrow_drop_down.svg";

export default function TeamLeads() {
  const associates = [
    { name: "Uwa Benjamin", title: "Front End Dev", img: Damola, index: 1 },
    { name: "Deji Dev", title: "Front End Dev", img: Damola, index: 2 },
    { name: "Blessing Okebe", title: "Front End Dev", img: Damola, index: 3 },
    { name: "Ibukun Neema", title: "Front End Dev", img: Pelumi, index: 4 },
    { name: "Gideon", title: "Front End Dev", img: Pelumi, index: 5 },
    { name: "Alabi Emmanuel", title: "Front End Dev", img: Pelumi, index: 6 },
    { name: "Fola", title: "Front End Dev", img: Naomi, index: 7 },
    { name: "Nancy", title: "Front End Dev", img: Naomi, index: 8 },
    { name: "Mubarak", title: "Front End Dev", img: Naomi, index: 8 },
  ];
  return (
    <div className="a-team-leads">
      <Container>
        <Row>
          <Col
            md={{ span: 10, offset: 1 }}
            className="a-team-card-holder pushtop"
          >
            <Row>
              <Col xs={12} md={4} className="a-blog-cards">
                <img src={Damola} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Adewale Adedamola
                </div>
                <span className="smallestText blackText b4">
                  Team Lead, CEO
                </span>
              </Col>
              <Col xs={12} md={4} className="a-blog-cards">
                <img src={Pelumi} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Eniodunmo Pelumi
                </div>
                <span className="smallestText blackText b4">
                  Software and Tech
                </span>
              </Col>
              <Col xs={12} md={4} className="a-blog-cards">
                <img src={Naomi} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Odidi Naomi
                </div>
                <span className="smallestText blackText b4">
                  Business Developer, COO
                </span>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 10, offset: 1 }} className="a-blog-card-holder pt-3">
            <Row>
              <Col xs={12} md={4} className="">
                <img src={Opeyemi} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Adewale Adedamola
                </div>
                <span className="smallestText blackText b4">
                  Content Development, CIO
                </span>
              </Col>
              <Col xs={12} md={4} className="">
                <img src={Pelumi} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Eniodunmo Pelumi
                </div>
                <span className="smallestText blackText b4">
                  Design and Creatives
                </span>
              </Col>
              <Col xs={12} md={4} className="">
                <div>
                  <img src={Erica} alt="" className="img pb-1" />
                  <div className="bold mediumText pb-1 blackText">
                    Abala Erica
                  </div>
                  <span className="smallestText blackText b4">
                    Customer Relations, CFO
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="a-team-gallery-wrapper">
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col xs={12} md={4}>
                <h2 className="bigText blackText">Associates</h2>
                {associates
                  .filter((associate) => associate.index === 1)
                  .map((associate, i) => (
                    <div md={6} key={i} className="a-blog-cards mt-5">
                      <img src={associate.img} alt="" className="img pb-1" />
                    </div>
                  ))}
              </Col>
              <Col xs={12} md={8}>
                <div className="smallestText blackText b4 montserrat">
                  A team of all creative persons ranging from Developers, Social
                  Media Manager, Creative Writers, Motion Graphics, Animations,
                  Illustrators, UI/UX, Product Design, Copywriting, Trainers,
                  Idea Innovators and Brnad Steategist.
                </div>
                <Row className="mt-5">
                  {associates
                    .filter((associate) => associate.index === 1)
                    .map((associate, i) => (
                      <Col md={6} key={i} className="mr-3">
                        <div className="d-flex justify-content-space">
                          <p className=" blackText bold">{associate.name}</p>
                          <span></span>
                        </div>
                        <span className="smallestText blackText b4">
                          {associate.title}
                        </span>
                      </Col>
                    ))}
                  {associates
                    .filter((associate) => associate.index !== 1)
                    .map((associate, i) => (
                      <Col
                        md={6}
                        key={i}
                        className="d-flex justify-content-space"
                      >
                        <p className=" blackText bold">{associate.name}</p>
                        <span>
                          <img src={ArrowDown} alt="associate" />
                        </span>
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="a-team-gallery-wrapper">
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col xs={12} md={3}>
                <h2 className="bigText blackText">Gallery</h2>
              </Col>
              <Col xs={12} md={5}>
                <div className="smallestText blackText b4 montserrat">
                  At Aorthar, our singular task is to help make brands burst
                  into life. Our goal is to create distinct and memorable
                  experience through compelling visual and verbal
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col xs={12} md={4} className="a-team-bg1"></Col>
              <Col xs={12} md={4} className="a-team-bg2"></Col>
              <Col xs={12} md={4} className="a-team-bg3"></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
