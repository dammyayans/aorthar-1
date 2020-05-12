import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; 
import { Col } from "react-bootstrap";

import s1 from "../../images/sos/sos1.png";
import s2 from "../../images/sos/sos2.png";
import s3 from "../../images/sos/sos3.png";
import s4 from "../../images/sos/sos4.png";
import s5 from "../../images/sos/sos5.png";
import s6 from "../../images/sos/sos6.png";
import s7 from "../../images/sos/sos7.jpeg";
import s8 from "../../images/sos/sos8.jpeg";

const ill = [s1, s2, s3, s4, s5, s6, s7, s8];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }w

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
        <Col md={4} sm={12}>
          <span>
              <div className="sos style pushtt"
              
                onClick={() => this.setState({ isOpen: true })}
                ></div>
              {isOpen && (
                <Lightbox
                  mainSrc={ill[photoIndex]}
                  nextSrc={ill[(photoIndex + 1) % ill.length]}
                  prevSrc={ill[(photoIndex + ill.length - 1) % ill.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + ill.length - 1) % ill.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % ill.length,
                    })
                  }
                />
              )}
          </span>
        </Col>      
    );
  }
}
