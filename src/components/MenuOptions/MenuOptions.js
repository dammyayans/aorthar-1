import React, { Component } from 'react';

import  { Link }  from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './MenuOptions.css';
export default class MenuOptions extends Component {
    render() {
        return (
            <Container fluid className="a-navbar-menu-banner">
                <Container>
                    <div className="a-navbar-menu-options">
                        <div>
                            <Link to="/blog">Blog</Link>
                        </div>
                        <div>
                            <Link to="/blog">Meet the Team</Link>
                        </div>                        
                        <div>
                            <Link to="/blog">Pricing</Link>
                        </div>                        
                        <div>
                            <Link to="/blog">Terms and Condition</Link>
                        </div>  
                        <div className="a-navbar-menu-boldheader">
                            Talk to us?
                        </div>                      
                        <div>
                            <span className="a-navbar-bold-menus"><b>Email:</b></span>
                            <span>
                                <a href="mailto:hello@aorthar.com">mailto:hello@aorthar.com</a>
                            </span>
                        </div>                      
                        <div>
                            <span className="a-navbar-bold-menus">Phone:</span>
                            <span>
                                <a href="tel">+234(0) 814 422 8160</a>
                            </span>
                        </div>                      
                    </div>                
                </Container>               
            </Container>
        )
    }
}
