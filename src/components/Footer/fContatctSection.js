import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';


class fContactSection extends Component {
    render() {
        return (
            <Row>
                <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }} className="a-footer-desc">
                    Aorthar is a full-service designing agency. We have worked with several companies 
                    to communicate their unique value proposition to target audiences in a perfectly 
                    relatable and compelling manner.
                    We believe that not just good, but top-noting branding and design will keep your 
                    products relevant and enables your customers to buy into what you do
                </Col>
            </Row>
        );
    }
}

export default fContactSection;