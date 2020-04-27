import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';


class fContactSection extends Component {
    render() {
        return (
            <Row>
                <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }} className="a-footer-desc">
                    Aorthar (ay-OR-tar) is a team of great minds to serve customers and clients with 
                    excellent delivery design and content service, and to achieve the function of 
                    usable products. We help our clients improve in sales and revenue. We believe
                    not just good, but top-notch branding and design keep your products relevant and
                    enables your customers but into what you do. 
                </Col>
            </Row>
        );
    }
}

export default fContactSection;