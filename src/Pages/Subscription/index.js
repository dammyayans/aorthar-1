import React, { Component } from 'react';

// import  { Link }  from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';
import GetStarted from '../../components/GetStarted/GetStarted';
import UD1 from '../../images/Naomi.png';

export default class Confirmation extends Component {
    render() {
        return (
            <Container fluid className="whitebg">
                <Container className="a-response-wrapper">
                    <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={7} sm={12}>
                                <h2 className="bigText blackText">Unlimited designs for your brand</h2>
                            </Col>
                            <Col xs={12} md={5} sm={12}>
                                <div className="a-wwa-caption smallestText blackText montserrat">
                                Aorthar has delivered sterling service to a wide array of 
                                businesses in a variety of industries, leaving a trail of 
                                thoroughly satisfied clients. Across every engagement,
                                there is one in common, irrepressible theme: out commitment 
                                to excellence and branding that looks so real; it lives. Here
                                some of our previous works.
                                </div>
                            </Col>
                        </Row> 
                    </Col>

                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={4} className="a-response-card">
                                <img src={UD1} alt=""/>
                                <h3 className="smallBoldText pt-3 blackText">Content Design</h3>
                                <p className="smallestText blackText b4 montserrat">We design every content you create or content we develop for you into graphics.</p>
                            </Col>
                            <Col xs={12} md={4} className="a-response-card">
                                <img src={UD1} alt=""/>
                                <h3 className="smallBoldText pt-3 blackText">Content Writing</h3>
                                <p className="smallestText blackText b4 montserrat">We write for you, your captions, your newsletters, your blogs and articles.</p>
                            </Col>
                            <Col xs={12} md={4} className="a-response-card">
                                <img src={UD1} alt=""/>
                                <h3 className="smallBoldText pt-3 blackText">Social Media Management</h3>
                                <p className="smallestText blackText b4 montserrat">We manage social media pages and interact with your audience on your behalf.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col  md={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} className="a-how-it-works">
                        <Row>
                            <Col xs={12} md={5}>
                                <h2 className="bigText blackText">How it works</h2>
                            </Col>
                            <Col xs={12} md={5} sm={12}>
                                <div className="a-wwa-caption smallestText blackText b4 montserrat">
                                    At Aorthar, our singular task is to help make brandsburst into life. 
                                    Our goal is to create  a distinct and memorable experience through 
                                    compelling visual and verbal cues.
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={{ span: 10, offset: 1}} className="align-center">
                        <Row className="pt-3">                        
                            <Col md={4} className="a-response-rate-cards">
                                <div className="a-response-rate-cards-item blackText">
                                    <p className="mediumText blackText pt-5 pb-3 text-center">Basic</p>
                                    <div>
                                        <span className="smallText bold blackText b7">Social Media Management</span>
                                        <p className="a-rate-cards-list smallestText b4">Instagram and Twitter</p>
                                        <p className="a-rate-cards-list smallestText b4"><b>5</b> engaging posts weekly</p>
                                        <p className="a-rate-cards-list smallestText b4">Instagram stories inclusive</p>
                                        <p className="a-rate-cards-list smallestText b4 line-through">Facebook stories inclusive</p>
                                        <p className="a-rate-cards-list smallestText b4 line-through">Facebook page engagement</p>
                                        <p className="a-rate-cards-list smallestText b4 line-through">Dedicated page manager</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="smallText bold blackText b7">Design Subscription</span>
                                        <p className="a-rate-cards-list smallestText b4"><b>20</b> orders with moderate review</p>
                                        <p className="a-rate-cards-list smallestText b4">1 order at a time</p>
                                        <p className="a-rate-cards-list smallestText b4">24 - 48 hours update</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="smallText bold blackText b7">Content Writing</span>
                                        <p className="a-rate-cards-list smallestText b4">1500 word count</p>
                                        <p className="a-rate-cards-list smallestText b4">Social Media Content Writeup</p>
                                    </div>
                                    <div className="text-center amount pt-5 mediumText">N100,000</div>
                                </div>
                            </Col>

                            <Col md={4} className="a-response-rate-cards justify-content-md-center">
                                <div className="a-response-rate-cards-item blackText">
                                    <p className="mediumText blackText pt-5 pb-3 text-center">Premium</p>
                                    <div>
                                        <span className="smallText bold blackText b7">Social Media Management</span>
                                        <p className="a-rate-cards-list smallestText b4">Instagram and Twitter</p>
                                        <p className="a-rate-cards-list smallestText b4"><b>10</b> engaging posts weekly</p>
                                        <p className="a-rate-cards-list smallestText b4">Instagram stories inclusive</p>
                                        <p className="a-rate-cards-list smallestText b4 line-through">Facebook stories inclusive</p>
                                        <p className="a-rate-cards-list smallestText b4 line-through">Facebook page engagement</p>
                                        <p className="a-rate-cards-list smallestText b4 line-through">Dedicated page manager</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="smallText bold blackText b7">Design Subscription</span>
                                        <p className="a-rate-cards-list smallestText b4"><b>30</b> orders with moderate review</p>
                                        <p className="a-rate-cards-list smallestText b4">2 order at a time</p>
                                        <p className="a-rate-cards-list smallestText b4">24 - 48 hours update</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="smallText bold blackText b7">Content Writing</span>
                                        <p className="a-rate-cards-list smallestText b4">3000 word count</p>
                                        <p className="a-rate-cards-list smallestText b4">Social Media Content Writeup</p>
                                    </div>
                                    <div className="text-center amount pt-5 mediumText">N150,000</div>
                                    <span className="recommended bold white smallText">Recommended</span>
                                </div>
                            </Col>

                            <Col md={4} className="a-response-rate-cards justify-content-md-center">
                            <div className="a-response-rate-cards-item blackText">
                                    <p className="mediumText blackText pt-5 pb-3 text-center">Pro</p>
                                    <div>
                                        <span className="smallText bold blackText b7">Social Media Management</span>
                                        <p className="a-rate-cards-list smallestText b4">Instagram, Twitter and Facebook</p>
                                        <p className="a-rate-cards-list smallestText b4"><b>20</b> engaging posts weekly</p>
                                        <p className="a-rate-cards-list smallestText b4">Instagram stories inclusive</p>
                                        <p className="a-rate-cards-list smallestText b4">Facebook stories inclusive</p>
                                        <p className="a-rate-cards-list smallestText b4">Facebook page engagement</p>
                                        <p className="a-rate-cards-list smallestText b4">Dedicated page manager</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="smallText bold blackText b7">Design Subscription</span>
                                        <p className="a-rate-cards-list smallestText b4"><b>40</b> orders with moderate revisions</p>
                                        <p className="a-rate-cards-list smallestText b4">Priority support</p>
                                        <p className="a-rate-cards-list smallestText b4">24 - 48 hours update</p>
                                    </div>
                                    <div className="pt-3">
                                        <span className="smallText bold blackText b7">Content Writing</span>
                                        <p className="a-rate-cards-list smallestText b4">6000 word count</p>
                                        <p className="a-rate-cards-list smallestText b4">Social Media Content Writeup</p>
                                    </div>
                                    <div className="text-center amount pt-5 mediumText">N300,000</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Container>
                <GetStarted />
        </Container>
        )
    }
}
