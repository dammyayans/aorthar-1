import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; 
import { Col } from "react-bootstrap";


import u3 from "../../images/ui2.png";
import u4 from "../../images/ui3.png";
import u5 from "../../images/uii.png";
import u1 from "../../images/uii.png";
import u6 from "../../images/ui1.png";

const ui = [u3, u4, u5, u1, u6];

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
              <div className="uiuuw style"
              
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
