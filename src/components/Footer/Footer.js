import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';
import '../GlobalStyles/global.css';
import Fade from "react-reveal/Fade";

import ContactSection from './fContatctSection';
import DescSection from './fDescSection';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container fluid className="a-footer-wrapper smallestText white b4 montserrat">
                    <Container>
                        <Fade left>
                            <ContactSection />
                        </Fade>
                        <DescSection />
                    </Container>
                </Container>
            </footer>
        );
    }
}

export default Footer;