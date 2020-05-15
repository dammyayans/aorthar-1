import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';

import P1 from '../../images/DnE.png';
import P4 from '../../images/p4men.png';
import P3 from '../../images/Office4ladies.png';
import P2 from '../../images/daba.png';
import fwd from '../../images/forward.png';

export default class Courses extends Component {
    render() {
        return (
            <Container fluid className="whitebg">
                <Helmet>
                    <meta charset="utf-8" />
                    <title>Aorthar | Creative Agency | Brand Identity | Software Development </title>
                </Helmet>
                <Container className="a-response-wrapper">
                    <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={7} sm={12}>
                                <h2 className="bigText blackText">Our Online <br/> Courses</h2>
                            </Col>
                            <Col xs={12} md={5} sm={12}>
                                <div className="a-wwa-caption smallestText blackText pt-2">
                                    We host top instructors from design industry to teach students 
                                    how to become professionals. Here are some available courses.
                                    You can get started today.
                                </div>
                            </Col>
                        </Row> 
                    </Col>

                    <Col md={{ span: 10, offset: 1 }} className="align-center pt-5 pb-5">
                        <Row>
                            <Col md={6} sm={12} className="px-0">
                                <Row>
                                    <Col md={6} sm={12}>
                                        <img src={P1} alt="" className="phldr"/>
                                    </Col>
                                    <Col md={6} sm={12} className="ptsm">
                                        <p className="green smallBoldText">
                                            Graphics Design Mastery Course
                                        </p>
                                        <div className="white smallestText pb-4">
                                            <span className="line-through p-2 greenbg">₦20,000</span>
                                            <span className="p-2 greenbg ml-2">₦10,000</span>
                                        </div>
                                        <span className="smallestText blackText">
                                            With 7 modules and over 20 videos of hands-on 
                                            crucial process in Design.
                                            Everything from how to start as a beginner, 
                                            becoming a pro, getting clients and more.
                                        </span>
                                    </Col>
                                    <div className="pt-3 pbsm">
                                        <a 
                                            href="https://bit.ly/DnEmoski" 
                                            target="_blank" 
                                            className="startnowarrow green montserrat b7"
                                            rel="noopener noreferrer"
                                        >
                                            Start Now! <img src={fwd} alt=""className="fwdarr"/>
                                        </a>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={6} sm={12} className="ptsm">
                                <Row>
                                   <Col md={6} sm={12}>
                                        <img src={P2} alt="" className="phldr"/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <p className="green smallBoldText ptsm">
                                            UI/UX Mastery Course
                                        </p>
                                        <div className="white smallestText pb-4">
                                            <span className="line-through p-2 greenbg">₦30,000</span>
                                            <span className="p-2 greenbg ml-2">₦15,000</span>
                                        </div>
                                        <span className="smallestText blackText">
                                            Explore user interface and user experience design that will teach 
                                            you the basics of UI/UX design and how to use Adobe XD and Figma.
                                        </span>
                                    </Col>
                                    <div className="pt-3 pbsm">
                                        <a 
                                            href="https://daba.school/user/signup.php" 
                                            target="_blank" 
                                            className="startnowarrow green montserrat b7"
                                            rel="noopener noreferrer"
                                        >
                                            Start Now! <img src={fwd} alt=""className="fwdarr"/>
                                        </a>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={6} sm={12} className="pt-md-5 ptsm">
                                <Row>
                                   <Col md={6} sm={12}>
                                        <img src={P3} alt="" className="phldr"/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <p className="green smallBoldText ptsm">
                                            Microsoft Office for "Women"
                                        </p>
                                        <div className="white smallestText pb-4">
                                            <span className="line-through p-2 greenbg">FREE</span>
                                            <span className="p-2 greenbg ml-2">₦1,000</span>
                                        </div>
                                        <span className="smallestText blackText">
                                            Explore user interface and user experience design that will teach 
                                            you the basics of UI/UX design and hoe to use Adobe XD and Figma.
                                        </span>
                                    </Col>
                                    <div className="pt-3 pbsm">
                                        <a 
                                            href="https://paystack.com/pay/office4ladiesrecap" 
                                            target="_blank" 
                                            className="startnowarrow green montserrat b7"
                                            rel="noopener noreferrer"
                                        >
                                            Start Now! <img src={fwd} alt=""className="fwdarr"/>
                                        </a>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={6} sm={12} className="pt-md-5 ptsm">
                                <Row>
                                   <Col md={6} sm={12}>
                                        <img src={P4} alt="" className="phldr"/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <p className="green smallBoldText ptsm">
                                            Portfolio for "Men"
                                        </p>
                                        <div className="white smallestText pb-4">
                                            <span className="line-through p-2 greenbg">FREE</span>
                                            <span className="p-2 greenbg ml-2">₦1,000</span>
                                        </div>
                                        <span className="extraSmallText blackText">
                                            --After the out cry of Men towards our to women... We decided 
                                            to take the men on how to build a portfolio site without any 
                                            code using Disha, Google site and Paystack. Register now before 
                                            its too late!
                                        </span>
                                    </Col>
                                    <div className="pt-3 pbsm">
                                        <a 
                                            href="https://bit.ly/Portfolio4Men" 
                                            target="_blank" 
                                            className="startnowarrow green montserrat b7"
                                            rel="noopener noreferrer"
                                        >
                                            Start Now! <img src={fwd} alt=""className="fwdarr"/>
                                        </a>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Container>
        </Container>
        )
    }
}
