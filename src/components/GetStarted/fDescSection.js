import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';


class fDescSection extends Component {
    render() {
        return (
            <Row>
                <Col md={{ span: 10, offset: 1}} className="a-footer-contact">
                    <Row>
                        <Col xs={12} md={6} className="a-footer-address">
                            <span>
                                <b>Office: </b>
                                <span>No 19a, Ogundana Street, Off Allen Avenue, Ikeja, Lagos State</span>
                            </span>
                        </Col>
                        <Col xs={12} md={6} className="a-footer-contact-links">
                            <span>
                                <b>Email: </b>
                                <Link to="mailto:hello@aorthar.com">hello@aorthar.com</Link>
                            </span>
                            <span>
                                <b>Phone: </b>
                                <Link to="tel:+2348144228160">+234(0) 814 422 8160</Link>                                    
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default fDescSection;