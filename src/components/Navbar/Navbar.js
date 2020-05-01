import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Navbar.css";
import "../GlobalStyles/global.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";

import Logo from "../../images/logo.png";
import MenuBar from "../../images/menuicon.png";
import DarkModeIcon from "../../images/darkmodeicon.png";
import ArrowUp from "../../images/arrow_drop_up.svg";
import ArrowDown from "../../images/arrow_drop_down.svg";
import Close from "../../images/close.svg";
import Fade from "react-reveal/Fade";

class NavBar extends Component {
  state = {
    exploreToggle: false,
    menuToggle: false,
    modeToggle: false,
  };
  setExploreToggle = (e) => {
    e.preventDefault();
    this.setState({
      exploreToggle: !this.state.exploreToggle,
      menuToggle: false,
    });
  };
  setMenuToggle = (e) => {
    e.preventDefault();
    this.setState({
      exploreToggle: false,
      menuToggle: !this.state.menuToggle,
    });
  };
  render() {
    return (
      <>
        <div style={{ position: "relative" }}>
          <Navbar className="a-navbar-wrapper sticky-top whitebgNav montserrat">
            <Container>
              <Navbar.Brand className="a-navbar-logo-container" href="/">
                <img src={Logo} alt="" />
              </Navbar.Brand>
                <Nav className="mr-auto">
                <Fade top>
                  <Nav.Link onClick={this.setExploreToggle} className="explore">
                    Explore
                    {this.state.exploreToggle ? (
                      <img src={ArrowUp} alt="ArrowUp" />
                    ) : (
                      <img src={ArrowDown} alt="ArrowDown" />
                    )}
                  </Nav.Link>
                </Fade>
              </Nav>
              <Fade top>
              <div className="a-navbar-others">
                <Nav.Link className="a-navbar-dm blackText">
                  <img
                    src={DarkModeIcon}
                    alt="MenuBar"
                    className="toggleMode"
                    onClick={() => {
                      this.setState({ modeToggle: !this.state.modeToggle });
                      this.props.onClick();
                    }}
                  />
                    <span>
                        {this.state.modeToggle ? "Dark Mode" : "Light Mode"}
                    </span>
                  </Nav.Link>
                <Nav.Link
                  className="a-navbar-menubar blackText text-animate"
                  onClick={this.setMenuToggle}
                  >
                  {this.state.menuToggle ? (
                    <img src={Close} alt="Close" />
                    ) : (
                      <img src={MenuBar} alt="MenuBar" />
                      )}
                  <span>{this.state.menuToggle ? "Close" : "Menu"}</span>
                </Nav.Link>
              </div>
              </Fade>
            </Container>
          </Navbar>
          <Fade duration={500} top when={this.state.exploreToggle}>
            <div
              style={{ display: this.state.exploreToggle ? "block" : "none" }}
              className="card whitebgNav montserrat smallText"
            >
              <Container>
                <Row className="pt-5 pb-5">
                  <Col md={{ span: 8, offset: 2 }} sm={12}>
                    <Row>
                      <Col sm={6}>
                        <div className="mb-3">
                          <Nav.Link className="cover" href="/apply">
                            Career
                          </Nav.Link>
                          <Nav.Link className="cover" >
                            Placeholder
                          </Nav.Link>
                          <Nav.Link className="cover" href="/http://bit.ly/designyarnREG">
                            Design Yarn
                          </Nav.Link>
                        </div>
                        <div>
                          <Nav.Link
                            className="cover"
                            href="https://web.facebook.com/Aorthar/"
                            target="blank"
                          >
                            Facebook
                          </Nav.Link>
                          <Nav.Link
                            className="cover"
                            href="https://twitter.com/aorthar"
                            target="blank"
                          >
                            Twitter
                          </Nav.Link>
                          <Nav.Link
                            className="cover"
                            href="https://www.instagram.com/aorthar/"
                            target="blank"
                          >
                            Instagram
                          </Nav.Link>
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="mb-3">
                          <Nav.Link className="cover" href="#">
                            Get Started
                          </Nav.Link>
                          <Nav.Link className="cover" href="https://bit.ly/DnEmoski" target="blank">
                            Buy our Design Course
                          </Nav.Link>
                          <Nav.Link className="cover" href="/subscription">
                            Design Subscription
                          </Nav.Link>
                        </div>
                        <div>
                          <Nav.Link className="cover" href="#">
                            Our Works
                          </Nav.Link>
                          <Nav.Link className="cover" href="/ourworks">
                            Our Process
                          </Nav.Link>
                          <Nav.Link className="cover" href="#">
                            {/* Get Our Merch */}
                            Rep our Brand
                          </Nav.Link>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>

          <Fade duration={500} top when={this.state.menuToggle}>
            <div
              className="card"
              style={{ display: this.state.menuToggle ? "block" : "none" }}
            >
              <Container>
                <Row className="whitebgNav montserrat smallText pt-5 pb-5">
                  <Col sm={8}></Col>
                  <Col sm={4} className="text-align-end">
                    <div className="mb-2">
                      <Nav.Link
                        className="cover"
                        href="https://medium.com/@aorthar/"
                        target="blank"
                      >
                        Blog
                      </Nav.Link>
                      <Nav.Link className="cover" href="/theteam">
                        Meet the Team
                      </Nav.Link>
                      <Nav.Link className="cover" href="/subscription">
                        Pricing
                      </Nav.Link>
                      <Nav.Link className="cover" href="#">
                        Terms and Conditions
                      </Nav.Link>
                    </div>
                    <div>
                      <h4>Talk to us?</h4>
                      <p>
                        <span className="font-weight-bold">Email:</span>{" "}
                        hello@aorthar.com
                      </p>
                      <p>
                        <span className="font-weight-bold">Phone:</span> +234(0)
                        8144228160
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            )}
          </Fade>
        </div>
      </>
    );
  }
}

export default NavBar;
