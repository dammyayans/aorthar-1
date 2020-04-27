import React, { Component } from 'react';

import './OurPackage.css';
import { Container, Row, Col } from 'react-bootstrap';
import DesignSubscription from './dSubscription';
import NewsletterSubscription from './nSubscription';
import DesignQuotes from './designQuotes';


export default class OurPackages extends Component {
    render() {
        return (
            <Container fluid className="a-our-packages-wrapper greybg">    
                <Container>                    
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={7} className="px-0">
                                <Col>
                                    <DesignSubscription />
                                </Col>
                                <Col>
                                <NewsletterSubscription />
                                </Col>
                            </Col>
                            <Col xs={12} md={5}>
                                <DesignQuotes/>
                            </Col>
                        </Row>
                    </Col>
                </Container>    
            </Container>    
        );
    }
}
