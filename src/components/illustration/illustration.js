import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { Col } from "react-bootstrap";

import i1 from "../../images/illustration/i1.png";
import i2 from "../../images/illustration/i2.gif";
import i3 from "../../images/illustration/i3.gif";
import i5 from "../../images/illustration/i5.png";
import i6 from "../../images/illustration/i6.png";
import i7 from "../../images/illustration/i7.png";
import i8 from "../../images/illustration/i8.png";

const ill = [i1, i2, i3, i5, i6, i7, i8];

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
              <div className="branding style pushtt"
              
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
