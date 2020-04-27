import React, { Component } from 'react';

import  { Link }  from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './ExploreOptions.css';
export default class ExploreOptions extends Component {
    render() {
        return (
            <Container fluid className="a-navbar-explore-banner">
                <Container>
                    <div className="a-navbar-explore-options">
                        <div>
                            <Link to="/blog">Internship</Link>
                        </div>
                        <div>
                            <Link to="/blog">Training</Link>
                        </div>                        
                        <div>
                            <Link to="/blog">Ambassador</Link>
                        </div>                        
                        <div className="mt-5">
                            <div className="d-flex justify-space-between">
                                <Link to="/fb.com">Facebook</Link>
                                <Link to="/fb.com">Facebook</Link>
                            </div>
                        </div>                       
                        <div>   
                            <Link to="/fb.com">Twitter</Link>
                        </div>                       
                        <div>
                            <Link to="/fb.com">Instagram</Link>
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
