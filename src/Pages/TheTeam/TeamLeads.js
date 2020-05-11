import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Damola from "../../images/Damola.png";
import Pelumi from "../../images/Pelumi.png";
import Naomi from "../../images/Naomi.png";
import Opeyemi from "../../images/Opeyemi.png";
import Erica from "../../images/Erica.png";
import ArrowDown from "../../images/arrow_drop_down.svg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamLeads() {
  const [associates, setAssociates] = useState([
    { name: "Uwa Benjamin", title: "Under Review", img: Pelumi },
    { name: "Deji Dev", title: "Back End Dev", img: Erica },
    { name: "Blessing Okebe", title: "Front End Des", img: Damola },
    { name: "Ibukun Neema", title: "Content Dev", img: Naomi },
    { name: "Nancy", title: "Full Stack Dev", img: Erica },
    { name: "Mubarak", title: "Front End Dev", img: Naomi },
    { name: "Gideon", title: "Under Review", img: Naomi },
    { name: "Fola", title: "Under Review", img: Naomi },
    { name: "Alabi Emmanuel", title: "Content Dev", img: Erica },
    { name: "Olayemi", title: "Content Dev", img: Erica },
  ]);
  const changeIndex = (associate) => {
    let indexOfNew = associates.indexOf(associate);
    let newArray = [...associates];
    let temp = newArray[indexOfNew];
    newArray[indexOfNew] = newArray[0];
    newArray[0] = temp;
    setAssociates(newArray);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="a-team-leads">
      <Container>
        <Row>
          <Col
            md={{ span: 10, offset: 1 }}
            className="a-team-card-holder pushtop"
          >
            <Row>
              <Col xs={12} md={4} className="a-blog-cards dd">
                <img src={Damola} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Adewale Adedamola
                </div>
                <span className="smallestText blackText b4">
                  Team Lead, CEO
                </span>
              </Col>
              <Col xs={12} md={4} className="a-blog-cards dd">
                <img src={Pelumi} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Eniodunmo Pelumi
                </div>
                <span className="smallestText blackText b4">
                  Software and Tech
                </span>
              </Col>
              <Col xs={12} md={4} className="a-blog-cards dd">
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
              <Col xs={12} md={4} className="dd">
                <img src={Opeyemi} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Opeyemi Sanni
                </div>
                <span className="smallestText blackText b4">
                  Content Development, CIO
                </span>
              </Col>
              <Col xs={12} md={4} className="dd">
                <img src={Pelumi} alt="" className="img pb-1" />
                <div className="bold mediumText pb-1 blackText">
                  Jolly Austin
                </div>
                <span className="smallestText blackText b4">
                  Design and Creatives
                </span>
              </Col>
              <Col xs={12} md={4} className="dd">
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

                <div
                  md={6}
                  className="a-blog-cards mt-5 d-sm-none d-none d-md-block"
                >
                  <img src={associates[0].img} alt="" className="img pb-1" />
                </div>
              </Col>
              <Col xs={12} md={8}>
                <div className="smallestText blackText b4 montserrat disapppear">
                  A team of all creative persons ranging from Developers, Social
                  Media Manager, Creative Writers, Motion Graphics, Animations,
                  Illustrators, UI/UX, Product Design, Copywriting, Trainers,
                  Idea Innovators and Brnad Steategist.
                </div>
                <Row className="mt-5 montserrat">
                  <Col md={6} className="mr-3 mb-3 d-sm-none d-none d-md-block">
                    <div className="d-flex justify-content-space montserrat">
                      <p className=" blackText bold mb-0">
                        {associates[0].name}
                      </p>
                      <span></span>
                    </div>
                    <span className="smallestText blackText b4 montserrat">
                      {associates[0].title}
                    </span>
                  </Col>

                  {associates.slice(1, 9).map((associate, i) => (
                    <Col md={6} key={i} className="d-sm-none d-none d-md-block">
                      <div
                        className="d-flex cursor-pointer justify-content-space"
                        onClick={() => changeIndex(associate)}
                      >
                        <p className=" blackText bold">{associate.name}</p>
                        <span>
                          <img src={ArrowDown} alt="associate" />
                        </span>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row className="d-flex d-md-none d-lg-none">
                  <Col sm={2}></Col>
                  <Col sm={8}>
                    <Slider {...settings}>
                      {associates.map((item, i) => (
                        <div key={i}>
                          <img src={item.img} alt="" width="100%" />
                          <div className="d-flex justify-content-center mt-2 montserrat">
                            <p className=" blackText bold mb-1">{item.name}</p>
                          </div>
                          <span className="smallestText blackText mb-1 b4 montserrat d-flex justify-content-center">
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </Slider>
                  </Col>
                  <Col sm={2}></Col>
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
