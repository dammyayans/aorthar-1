import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import "./Case.css";
import { Col, Row } from "react-bootstrap";

import branding from "../../images/branding1.png";
import branding2 from "../../images/branding2.png";
import branding3 from "../../images/branding3.png";
import branding4 from "../../images/branding4.png";
import branding5 from "../../images/branding5.png";
import branding6 from "../../images/branding6.png";
import branding7 from "../../images/branding7.png";
import branding8 from "../../images/branding8.png";
import branding9 from "../../images/branding9.png";
import branding10 from "../../images/branding10.png";
import branding11 from "../../images/branding11.png";
import branding12 from "../../images/branding12.png";
import branding13 from "../../images/branding13.png";
import branding14 from "../../images/branding14.png";
import branding15 from "../../images/branding15.png";
import branding16 from "../../images/branding16.png";
import branding17 from "../../images/branding17.png";
import branding18 from "../../images/branding18.png";
import branding19 from "../../images/branding19.png";
import branding20 from "../../images/branding20.png";

const img = [branding, branding2, branding3, branding4, branding5, branding6, branding7, branding8, branding9, branding10,  branding11, branding12, branding13, branding14, branding15, branding16, branding16, branding17, branding18, branding19, branding20  ];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <Row>

        <Col md={4} sm={12}>
          <span>
              <div className="dabas style"
              
                onClick={() => this.setState({ isOpen: true })}
                ></div>

              {isOpen && (
                <Lightbox
                  mainSrc={img[photoIndex]}
                  nextSrc={img[(photoIndex + 1) % img.length]}
                  prevSrc={img[(photoIndex + img.length - 1) % img.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + img.length - 1) % img.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % img.length,
                    })
                  }
                />
              )}
          </span>
        </Col>
      </Row>
      
    );
  }
}
