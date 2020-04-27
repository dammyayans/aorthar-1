import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import  { Link }  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './GetStarted.css';
import '../GlobalStyles/global.css';

import  Placeholder from '../../images/Opeyemi.png';

// import ContactSection from './';
// import DescSection from './';
// import OtherLinks from './';

class GetStarted extends Component {
    render() {
        return (
            <Container fluid className="a-get-started-wrapper whitebg">
                <Container>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="bigText">
                                    <div className="blackText">Ready to start</div>
                                    <div className="blackText">with <span className="green">us?</span></div>
                                </div>
                                <p className="a-get-started-caption blackText smallestText blackText b4 montserrat">
                                    Let's build something together! Enjoy the <br />
                                    luxury of working with us or contact us <br/> 
                                    below.
                                </p>
                                <select>
                                    <option>Select a service</option>
                                    <option>Design</option>
                                    <option>Design</option>
                                    <option>Design</option>
                                </select>
                                <p className="a-get-started-contact blackText montserrat b7">
                                    Send us a mail via <a href="mailto:hello@aorthar.com" className="green a-hello-aorthar b7">hello@aorthar.com</a><br />
                                    or call: +234(0) 814 422 8160
                                </p>
                            </Col>
                            <Col xs={12} md={6} className="">
                                <Row className="justify-content-md-center blackText">
                                    <Col md="auto" className="a-get-started-testimonies">
                                        <img src={Placeholder} alt="person" />
                                        <div>
                                            <div className="a-get-started-words blackText smallestText blackText b4 montserrat">
                                                <p className="white">
                                                    Aorthar has immersed itself into
                                                    the work they do and that has made
                                                    them outstanding from the rest. They
                                                    give us so much attention to their work
                                                    and every little detail matters so much
                                                    to them.
                                                </p>
                                                <p className="white bold"><span>- </span>Karr Johnson</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </Container>
        );
    }
}

export default GetStarted;