import React, { Component } from 'react';

// import  { Link }  from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';
// import content from '../../images/content.png';
// import contentwriting from '../../images/contentwriting.png';
// import contentSocial from '../../images/contentSocial.png';

import P1 from '../../images/DE.png';

export default class Courses extends Component {
    render() {
        return (
            <Container fluid className="whitebg">
                <Container className="a-response-wrapper">
                    <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={7} sm={12}>
                                <h2 className="bigText blackText">Our Online <br/> Courses</h2>
                            </Col>
                            <Col xs={12} md={5} sm={12}>
                                <div className="a-wwa-caption smallestText blackText">
                                We host top instructors from design industry to teach students 
                                how to become professionals. Here are some available courses.
                                You can get started today.
                                </div>
                            </Col>
                        </Row> 
                    </Col>

                    <Col md={12} className="align-center">
                        <Row>
                            <Col md={6} sm={12} className="px-0">
                                <Row>
                                    <Col md={6} sm={12}>
                                        <img src={P1} alt="" className="phldr"/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <p className="green smallBoldText">
                                            Graphics Design <br />
                                            Mastery Course
                                        </p>
                                        <div>
                                            <span className="line-through">n20,000</span>
                                            <span>10,000</span>
                                        </div>
                                        <span className="smallestText blackText">
                                            -- With 7 modules and over 20 videos of hands on practical
                                            training where I take you throughevery single step of the
                                            process. Everything from how to start as a beginner to 
                                            becoming a pro, getting clients and sales to building 
                                            a great design brand and portfolio.
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} sm={12}>
                                <Row>
                                   <Col md={6} sm={12}>
                                        <img src={P1} alt="" className="phldr"/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <p className="green smallBoldText">
                                            UI/UX Mastery <br />
                                            Course
                                        </p>
                                        <div>
                                            <span className="line-through">n20,000</span>
                                            <span>10,000</span>
                                        </div>
                                        <span className="smallestText blackText">
                                            -- Explore user interface and user experience design that will teach 
                                            you the basics of UI/UX design and hoe to use Adobe XD and Figma.
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} sm={12}>
                                <Row>
                                   <Col md={6} sm={12}>
                                        <img src={P1} alt="" className="phldr"/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <p className="green smallBoldText">
                                            Microsoft Office for<br />
                                            "Women"
                                        </p>
                                        <div>
                                            <span className="line-through">free</span>
                                            <span>1,000</span>
                                        </div>
                                        <span className="smallestText blackText">
                                            Explore user interface and user experience design that will teach 
                                            you the basics of UI/UX design and hoe to use Adobe XD and Figma.
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} sm={12}>
                                <Row>
                                   <Col md={6} sm={12}>
                                        <img src={P1} alt="" className="phldr"/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <p className="green smallBoldText">
                                            Portfolio for <br />
                                            "Men"
                                        </p>
                                        <div>
                                            <span>FREE</span>
                                            <span>PENDING</span>
                                        </div>
                                        <span className="smallestText blackText">
                                            --After the outcry of Men towards our to women... We decided 
                                            to take the menon How to build a portfolio site without any 
                                            code using Disha, Google site and Paystack. Register now before 
                                            its too late!
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Container>
        </Container>
        )
    }
}
