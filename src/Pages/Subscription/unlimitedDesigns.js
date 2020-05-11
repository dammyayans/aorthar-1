import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default class Response extends Component {
    render() {
        return (
            <Container className="a-banner">
                <Row className="a-banner-wrapper justify-content-md-center">
                    <Col md={4} className="a-banner-heroImg">
                        <h1>Unlimited designs for your brand</h1>
                    </Col> 
                    <Col md={4} className="a-banner-caption">
                       <p>Subscribe to our unlimited designs service every month at a very cheap rate.
                           Enjoy excellent deliveries and access to reviews and speedy delivery.
                       </p>
                    </Col> 
                </Row>
                <Row md={{ span: 8, offset: 2 }}>
                    <Col md={4}>Enter</Col>
                    <Col md={4}>Enter</Col>
                    <Col md={4}>Enter</Col>
                </Row>
            </Container>
        )
    }
}
