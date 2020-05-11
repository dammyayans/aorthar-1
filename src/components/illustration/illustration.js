import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { Col } from "react-bootstrap";

import i2 from "../../images/instalikes.gif";
import i1 from "../../images/skatinggirl.gif";
import i3 from "../../images/illustration.jpeg";
import i4 from "../../images/illustration5.png";
import i5 from "../../images/ilustration2.jpeg";

const ill = [i1, i2, i3, i4, i5];

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
        <Col md={4} sm={12}>
          <span>
              <div className="branding style"
              
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
