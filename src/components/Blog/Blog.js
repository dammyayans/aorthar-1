import React, { Component } from 'react';


import './Blog.css';
import '../GlobalStyles/global.css';
import { Container, Row, Col } from 'react-bootstrap';

import Independence from '../../images/independence.png';
import Smes from '../../images/smes.png';
import Branding from '../../images/branding.png';

export default class Blog extends Component {
    render() {
        return (
            <Container fluid className="whitebg">
                <Container>
                    <Row className="a-blog-wrapper">
                        <Col md={{ span: 8, offset: 2 }} className="a-blog-heading">
                            <h2 className="bigText blackText">From the Blog</h2>    
                        </Col>
                        <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1}} className="a-blog-card-holder">
                            <Row>
                                <Col xs={12} md={4} className="a-blog-cards">
                                    <a href="https://medium.com" >
                                        <img src={Independence} alt=""/>
                                        <div className="a-blog-cards-heading smallBoldText green">Nigeria at 59</div>
                                        <p className="smallestText montserrat blackText">An approach to SMEs</p>
                                    </a>
                                </Col>
                                <Col xs={12} md={4} className="a-blog-cards">
                                    <a href="https://medium.com/@aorthar/branding-gone-wrong-b7fed5a4f4d1" target="blank">
                                        <img src={Branding} alt=""/>
                                        <div className="a-blog-cards-heading smallBoldText green">Branding Gone Wrong</div>
                                        <p className="smallestText montserrat blackText">How mistakes cost the lives of some popular brands</p>
                                    </a>
                                </Col>
                                <Col xs={12} md={4} className="a-blog-cards">
                                    <a href="https://medium.com" >
                                        <img src={Smes} alt=""/>
                                        <div className="a-blog-cards-heading smallBoldText green">Branding 20 Young Entrepreneurs</div>
                                        <p className="smallestText montserrat blackText">Aorthar's service to Small Business Owners</p>
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
