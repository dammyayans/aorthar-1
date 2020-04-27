import React from 'react'


import './style.css';
import '../../components/GlobalStyles/global.css';

import Arrow from '../../images/forward.png';
import { Container, Row, Col} from 'react-bootstrap';
import GetStarted from '../../components/GetStarted/GetStarted';


export default function index() {
    return (
        <Container fluid className="whitebg">
            <Container>
                <Col md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} className="push2">
                    <Row>
                        <Col xs={12} md={6} sm={12}>
                            <h2 className="bigText">
                                <span className="blackText">Branding so  </span>
                                <span className="green">real, </span> <br />
                                <span className="blackText">it lives</span>
                            </h2>
                        </Col>
                        <Col xs={12} md={6} sm={12}>
                            <div className="a-wwa-caption smallestText blackText b4 montserrat">
                            Aorthar has delivered sterling service to a wide array of 
                            businesses in a variety of industries, leaving a trail of 
                            thoroughly satisfied clients. Across every engagement,
                            there is one in common, irrepressible theme: out commitment 
                            to excellence and branding that looks so real; it lives. Here
                            some of our previous works.
                            </div>
                        </Col>
                    </Row> 
                    <Row>
                        <div className="a-previous-works1">
                            {/* qknlsslknlgnklnlnln */}
                        </div>
                        <div className="a-previous-works">
                        
                        </div>
                        <div className="a-previous-works">

                        </div>
                    </Row>
                </Col>
                <Col  md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                    <Row>
                        <Col xs={12} md={6} sm={12}>
                            <h1 className="bigText blackText">Our Wide Range of services</h1>
                        </Col>
                        <Col xs={12} md={6} sm={12}>
                            <div className="a-wwa-caption smallestText blackText b4 montserrat">
                                Aorthar has delivered sterling service to a wide array of 
                                businesses in a variety of industries, leaving a trail of 
                                thoroughly satisfied clients. Across every engagement,
                                there is one in common, irrepressible theme: out commitment 
                                to excellence and branding that looks so real; it lives. Here
                                some of our previous works.
                            </div>
                        </Col>
                    </Row> 
                    <Row className='push montserrat blackText'>
                        <Col xs={6} md={3}>
                            <h3 className="mediumText ">Branding</h3>
                            <li>Visual Branding</li>
                            <li>Product Branding</li>
                            <li>Event Branding</li>
                            <li>Motion Graphics</li>
                            <li>Animation</li>
                            <li>Graphics Design</li>
                            <li>Brand Guide Development</li>
                        </Col>
                        <Col xs={6} md={3}>
                            <h3 className="mediumText ">Product Design</h3>
                            <li>Web Design</li>
                            <li>App Design</li>
                            <li>User Interface Design</li>
                            <li>User Experience Design</li>
                            <li>Prototyping</li>
                            <li>Wireframe</li>
                            <li>Wordpress</li>
                        </Col>
                        <Col xs={6} md={3} className="move">
                            <h3 className="mediumText ">Content Marketing</h3>
                            <li>Article Writing</li>
                            <li>Story Telling</li>
                            <li>Content Development</li>
                            <li>Social Media Management</li>
                        </Col>
                        <Col xs={6} md={3} className="move">
                            <h3 className="mediumText ">Software Development</h3>
                            <li>Front End Web Development</li>
                            <li>Back End Web Development</li>
                            <li>SEO</li>
                            <li>Project Management</li>
                        </Col>
                    </Row>
                </Col>

                <Col  md={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} className="push2">
                    <Row>
                        <Col xs={12} md={6} sm={12}>
                            <h1 className="bigText blackText">Our creative process</h1>
                        </Col>
                        <Col xs={12} md={6} sm={12}>
                            <div className="a-wwa-caption smallestText blackText b4 montserrat">
                                We believe in having all our docks in a row and never misisng the
                                details on each project we embark upon. The goalof our creative process
                                is to set clear milestones and deadlines, ensuring timely delivery of 
                                the project.
                            </div>
                        </Col>
                    </Row> 
                    <Row className='a-our-work-process smallText'>
                        <Col xs={6} md={3}>
                            <Row>
                                <Col md={6}>
                                    <span> Discovery <br/> Meeting</span>                       
                                </Col>
                                <Col md={6}>
                                    <span><img src={Arrow} alt="" /></span>                            
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={6} md={3}> 
                            <Row>
                                <Col md={6}>
                                    <span>Strategy <br/> initiation</span>                       
                                </Col>
                                <Col md={6}>
                                    <span><img src={Arrow} alt="" /></span>                            
                                </Col>
                            </Row>                        
                        </Col>

                        <Col xs={6} md={3}>
                            <Row>
                                <Col md={6}>
                                    <span>Project <br/>Development</span>                       
                                </Col>
                                <Col md={6}>
                                    <span><img src={Arrow} alt="" /></span>                            
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={6} md={3}>
                            <Row>
                                <Col md={12}>                      
                                    <span>Reviews and <br/> Round up</span>                       
                                </Col>                        
                            </Row>                     
                        </Col>
                    </Row>                
                </Col>
            <GetStarted />
        </Container>
    </Container>
    )
}
