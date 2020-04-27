import React, { Component } from 'react';

// import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footerdesc.css';

import Career from '../../images/career.png';
import Download from '../../images/download.png';
import TandC from '../../images/tandc.png';
import Feedback from '../../images/feedback.png';


class fDescSection extends Component {
    render() {
        return (
           <div className="footer-desc-section">
                <p className="text-center footer-desc-section-item">
                    <span>Office: </span>
                    <span> No. 19a, Ogundana Street, Off Allen Avenue, Ikeja, Lagos State.</span>
                </p>
                <div className="footer-contact-section">
                    <div>
                        <span>Email: </span>
                        <a href="mailto:hello@aorthar.com">hello@aorthar.com</a>
                    </div>
                    <div>
                        <span>Contact: </span>
                        <a href="tel:+2348144228160">+234(0) 814 422 8160</a>
                    </div>
                </div>  
                <div className="d-flex justify-content-between footer-base-section">
                    <span>
                        &copy; 2019 - 2020 Aorthar Design Agency - RC 2986050
                    </span>
                    <span className="footer-base-links extraSmallText">
                        <a href="/">
                            <img src={TandC} alt="Feedback"  className="sm-pt"/> 
                            Terms & Conditions
                        </a>
                        <a href="/">
                            <img src={Feedback} alt="Feedback"  className="sm-pt"/> 
                            Write us a Feedback
                        </a>
                        <a href="/">
                            <img src={Download} alt="Rate Card"  className="sm-pt"/> 
                            Download our Rate Card
                        </a>
                        <a href="/">
                            <img src={Career} alt="Rate Card"  className="sm-pt"/> 
                            Career & Internship
                        </a>
                    </span>
                </div>              
           </div>
        );
    }
}

export default fDescSection;