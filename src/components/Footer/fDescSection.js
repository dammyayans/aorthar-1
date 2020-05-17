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
                    <span>Studio: </span>
                    <span> 33, Adeshina Avenue, Iju-Ishaga, Lagos.</span>
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
                    <span className="order-2 sm-pp">
                        &copy; 2019 - 2020 Aorthar Design Agency - RC 2986050
                    </span>
                    <span className="footer-base-links extraSmallText order-1">
                        <a href="/">
                            <img src={TandC} alt="Feedback"  className="sm-pt"/> 
                            <span>
                                Terms & Conditions
                            </span>
                        </a>
                        <a href="mailto:hello@aorthar.com" >
                            <img src={Feedback} alt="Feedback"  className="sm-pt"/> 
                            <span>
                                Write us a Feedback
                            </span>
                        </a>
                        <a href="/">
                            <img src={Download} alt="Rate Card"  className="sm-pt"/> 
                            <span>
                                Download our Rate Card
                            </span>
                        </a>
                        <a href="/apply">
                            <img src={Career} alt="Rate Card"  className="sm-pt"/> 
                            <span>
                                Career & Internship
                            </span>
                        </a>
                    </span>
                </div>              
           </div>
        );
    }
}

export default fDescSection;