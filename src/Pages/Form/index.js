import React from 'react'


import './style.css';
import '../../components/GlobalStyles/global.css'
import { Container, Row, Col} from 'react-bootstrap';

export default function Form() {
    return ( 
        <Container fluid className="whitebg formwrapper pb-5">
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 1 }}  className="a-team-card-holder pushtop">
                        <div className="bigText blackText">Tell us about your project</div>
                        <p className="smallestText blackText b4 montserrat mt-2">Complete this form and we'll reach out ot you</p>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }}  className="a-team-card-holder">
                        <form action="" className="mt-5 pb-5 montserrat">
                            <Row>
                                <Col>
                                    <p className="blackText bold">Contact Name</p>
                                    <input type="text" placeholder="Your Name or Company Name" className="black"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                    <p className="blackText bold">Email Address</p>
                                    <input type="email" placeholder="youremail@domain.com" className="black"/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={6}>
                                    <p className="blackText bold">Phone Number</p>
                                    <input type="tel" placeholder="+123 4567 890" className="black"/>
                                </Col>
                                <Col md={6}>
                                    <p className="blackText bold">Project Type</p>
                                    {/* <input type="email" placeholder="youremail@domain.com" className="black"/> */}
                                    <select className="blackText serviceOptions">
                                        <option value="">Branding and Design</option>
                                        <option value="">UI/UX</option>
                                        <option value="">Content Marketing</option>
                                        <option value="">Social Media Management</option>
                                        <option value="">Motion Graphics</option>
                                        <option value="">Software Development</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={6}>
                                    <p className="blackText bold">Budget</p>
                                    <input type="tel" placeholder="+123 4567 890" className="black"/>
                                </Col>
                                <Col md={6}>
                                    <p className="blackText bold">Timeline</p>
                                    <input type="email" placeholder="youremail@domain.com" className="black"/>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <p className="blackText bold">Project Brief</p>
                                    <textarea className="black" placeholder="what else would you like us to know?"/>

                                    <button type="submit" className="submitButton mt-3 black">Submit</button>
                                </Col>
                            </Row>

                            {/* <Row>
                                <Col  md={{ span: 4, offset: 1 }}>Left</Col>
                                <Col  md={{ span: 4, offset: 1 }}>Right</Col>
                            </Row>
                            <div className="form-group">
                                <p>Contact Name</p>
                            </div>
                            <div className="form-group">
                                <p>Email Address</p>
                                <input type="email" placeholder="youremail@domain.com"/>
                            </div> */}
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}