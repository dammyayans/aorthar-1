import React, { Component } from 'react';


import './Blog.css';
import '../GlobalStyles/global.css';
import { Container, Row, Col } from 'react-bootstrap';

import Independence from '../../images/bg20.png';
import Smes from '../../images/by20.png';
import Branding from '../../images/n59.png';

export default class Blog extends Component {
    render() {
        return (
            <Container fluid className="whitebg">
                <Container>
                    <Row className="a-blog-wrapper">
                        <Col md={{ span: 10, offset: 1 }} className="a-blog-heading">
                            <p className="bigText blackText montserrat">From the Blog</p>    
                        </Col>
                        <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1}} className="a-blog-card-holder pt-4">
                            <Row>
                                <Col xs={12} md={4} className="a-blog-cards">
                                    <a href="https://medium.com/@aorthar/art-generally-has-been-viewed-as-the-most-thriving-force-evolving-the-universe-with-its-alluring-fa0232fa7dc5" target="blank">
                                        <img src={Independence} alt=""/>
                                        <div className="a-blog-cards-heading smallBoldText green">Graphics Design and Culture</div>
                                        <p className="smallestText montserrat blackText">Cultural approach to Design</p>
                                    </a>
                                </Col>
                                <Col xs={12} md={4} className="a-blog-cards">
                                    <a href="https://medium.com/@aorthar/branding-gone-wrong-b7fed5a4f4d1" target="blank">
                                        <img src={Branding} alt=""/>
                                        <div className="a-blog-cards-heading smallBoldText green">Branding Gone Wrong</div>
                                        <p className="smallestText montserrat blackText">Popular Ads Fail of all time</p>
                                    </a>
                                </Col>
                                <Col xs={12} md={4} className="a-blog-cards">
                                    <a href="https://medium.com/@aorthar/you-think-youre-a-designer-1d5634e7742b?source=---------7------------------" target="blank">
                                        <img src={Smes} alt=""/>
                                        <div className="a-blog-cards-heading smallBoldText green">What Defines a Designer?</div>
                                        <p className="smallestText montserrat blackText">How not to be a "Wack Designer"</p>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
