import React, { Component } from 'react';


import './OurServices.css';
import { Container, Col, Row } from 'react-bootstrap';



export default class OurServices extends Component {
    render() {
        return (
            <Container fluid className="greybg">
                <Container className="a-our-services-wrapper">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2 className="bigText">
                                <span className="blackText">Our </span>
                                <span className="green">Services</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={4} className="a-our-services-heading">
                            <h4 className="mediumText blackText">Branding</h4>
                            <p className="blackText montserrat smallestText">
                                We give your product and brand a <br/>
                                distinctive look, unveiling the grasp of what <br/>
                                your brand does, and what it stands for.
                            </p>
                        </Col>
                        <Col xs={12} md={4} className="a-our-services-heading">
                            <h4 className="mediumText blackText">Product Design</h4>
                            <p className="blackText montserrat smallestText">
                                We give your website a beautiful look, <br/>
                                understandable and easy-to-use interface <br/>
                                for your customers.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={4} className="a-our-services-heading">
                            <h4 className="mediumText blackText">Content Marketing</h4>
                            <p className="blackText montserrat smallestText">
                            We deliver the perfect message to the <br/>
                            perfect listeners. We write blogs, stories, <br/>
                            newsletter and needed captions.
                            </p>
                        </Col>
                        <Col xs={12} md={4} className="a-our-services-heading">
                            <h4 className="mediumText blackText">Software Development</h4>
                            <p className="blackText montserrat smallestText">
                            We develop your apps and websites into a <br/>
                            perfect working prototype as we deliver <br/>
                            design, front-end and back-end service.
                        </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
