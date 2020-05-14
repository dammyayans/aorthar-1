import React, { Component } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Fade from "react-reveal/Fade";

import "./GetStarted.css";
import "../GlobalStyles/global.css";
import "../Banner/Banner.css";

import Placeholder from "../../images/Chris.png";
import Placeholder2 from "../../images/Emmanuel.png";
import Placeholder3 from "../../images/rhoda.png";

class GetStarted extends Component {
  services = [
    "Branding and Design",
    "UI/UX",
    "Content Marketing",
    "Social Media Management",
    "Motion Graphics",
    "Software Development",
  ];

  state = {
    randomQuote: { quote: "", image: "", author: "" },
    change: false,
  };
  myQuotes = [
    {
      quote:
        "Adedamola and his team are like my personal Designer, He is fast and delivers with high level excellence and professionalism, he knows how to pick my imaginations for a design and bring it to life.",
      image: Placeholder,
      author: "Chris Ani (CEO, DABA and Cryptohub.club)",
    },
    {
      quote:
        "His fast delivery and attention to detail makes him one of the best designers I’ve ever worked with.",
      image: Placeholder2,
      author: "Emmanuel Olorunshola (CEO, Digiville)",
    },
    {
      quote:
        "Aorthar has immersed themselves so much into the work they do and that has made them outstanding from the rest. They have great respect for their art, that they give so much attention to their work and every little detail matters so much to them.",
      image: Placeholder3,
      author: "Rhoda Robinson (Executive Director, HACEY Health Inititive)",
    },
  ];
  randomQuoteGenerator = () =>
    this.myQuotes[Math.floor(Math.random() * this.myQuotes.length)];
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        randomQuote: this.randomQuoteGenerator(),
        change: !this.state.change,
      });
    }, 5000);
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }

  render() {
    return (
      <Container fluid className="a-get-started-wrapper whitebg">
        <Container>
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col xs={12} md={6}>
                <Fade bottom>
                  <div className="bigText">
                    <div className="blackText">Ready</div>
                    <div className="blackText">to start</div>
                    <div className="blackText">
                      with <span className="green">us?</span>
                    </div>
                  </div>
                </Fade>
                <Fade bottom delay={500}>
                  <p className="a-get-started-caption blackText smallestText blackText b4 montserrat">
                    Let's build something together! Enjoy the <br />
                    luxury of working with us or contact us <br />
                    below.
                  </p>
                  <div className="dropdownContainer">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="service"
                        variant="default"
                        id="dropdown-basic"
                      >
                        Select a service
                      </Dropdown.Toggle>

                      <Dropdown.Menu className=" service_menu greybg dropmenu">
                        {this.services.map((service, i) => (
                          <Link
                            key={i}
                            to={
                              "/Form" + (service === "UI/UX" ? "uiux" : service)
                            }
                          >
                            <li className="dropli">{service}</li>
                          </Link>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Fade>
                <Fade bottom delay={800} className="sendmail">
                  <p className="a-get-started-contact blackText montserrat b7">
                    Send us a mail via{" "}
                    <a
                      href="mailto:hello@aorthar.com"
                      className="green a-hello-aorthar b7"
                    >
                      hello@aorthar.com
                    </a>
                    <br />
                    or call: +234(0) 814 422 8160
                  </p>
                </Fade>
              </Col>
              <Col xs={12} md={6} className="">
                {/* <Fade bottom> */}
                <Row className="justify-content-md-center blackText">
                  <Col md="auto" className="a-get-started-testimonies">
                    {/* <Zoom spy={this.state.change} duration={600}> */}
                    <img src={this.state.randomQuote.image} alt="person" />
                    {/* </Zoom> */}
                    <div>
                      <div className="a-get-started-words blackText smallText blackText b4">
                        {/* <Zoom */}
                        {/* spy={this.state.change}
                            delay={200}
                            duration={800}? */}

                        <p className="white">{this.state.randomQuote.quote}</p>
                        {/* </Zoom> */}
                        {/* <Zoom */}
                        {/* spy={this.state.change}
                            delay={300}
                            duration={1000} >*/}

                        <p className="white bold smallestText">
                          <span>- </span>
                          {this.state.randomQuote.author}
                        </p>
                        {/* </Zoom> */}
                      </div>
                    </div>
                  </Col>
                </Row>
                {/* </Fade> */}
              </Col>
            </Row>
          </Col>
        </Container>
      </Container>
    );
  }
}

export default GetStarted;
