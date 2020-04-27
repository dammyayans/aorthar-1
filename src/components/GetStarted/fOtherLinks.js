import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css';

import Career from '../../images/career.png';
import Download from '../../images/download.png';
import TandC from '../../images/tandc.png';
import Feedback from '../../images/feedback.png';


class fOtherLinks extends Component {
    render() {
        return (
            <div className="a-footer-other-links">
                <div>
                    &copy; 2019 - 2020 Aorthar Design Agency - RC 2986050
                </div>
                <div className="a-footer-others">
                    <span>
                        <img src={TandC} alt="TandC"/>
                        <Link to="#">Terms and Conditions</Link>
                    </span>
                    <span>
                        <img src={Feedback} alt="Feedback icon"/>
                        <Link to="#">Write us a Feedback</Link>
                    </span>
                    <span>
                        <img src={Download} alt="Download"/>
                        <Link to="#">Download our Rate Card</Link>
                    </span>
                    <span>
                    <img src={Career} alt="Career"/>
                        <Link to="#">Career & Internship</Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default fOtherLinks;