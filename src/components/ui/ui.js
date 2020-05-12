import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; 
import { Col } from "react-bootstrap";


import u1 from "../../images/ui/u1.png";
import u2 from "../../images/ui/u2.png";
import u3 from "../../images/ui/u3.png";
import u4 from "../../images/ui/u4.png";
import u5 from "../../images/ui/u5.png";
import u6 from "../../images/ui/u6.gif";

const ui = [u1, u2, u3, u4, u5, u6];

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
              <div className="uiuu style pushtt"
              
                onClick={() => this.setState({ isOpen: true })}
                ></div>

              {isOpen && (
                <Lightbox
                  mainSrc={ui[photoIndex]}
                  nextSrc={ui[(photoIndex + 1) % ui.length]}
                  prevSrc={ui[(photoIndex + ui.length - 1) % ui.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + ui.length - 1) % ui.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % ui.length,
                    })
                  }
                />
              )}
          </span>
        </Col>      
    );
  }
}
