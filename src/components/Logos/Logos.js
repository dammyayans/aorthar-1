import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; 
import { Col } from "react-bootstrap";

import l1 from "../../images/l1.png";
import l2 from "../../images/l2.png";
import l3 from "../../images/l3.png";
import l4 from "../../images/l4.png";
import l5 from "../../images/l5.png";
import l6 from "../../images/l6.png";
import l7 from "../../images/l7.png";
import l8 from "../../images/l8.png";
import l9 from "../../images/l9.png";
import l10 from "../../images/l10.png";
import l11 from "../../images/l11.png";
import l12 from "../../images/l12.png";
import l13 from "../../images/l13.png";
import l14 from "../../images/l14.png";
import l15 from "../../images/l15.png";
import l16 from "../../images/l16.png";
import l17 from "../../images/l17.png";
import l18 from "../../images/l18.png";
import l19 from "../../images/l19.png";
import l20 from "../../images/l20.png";
import l21 from "../../images/l21.png";
import l22 from "../../images/l22.png";
import l23 from "../../images/l23.png";
import l24 from "../../images/l24.png";
import l25 from "../../images/l25.png";
import l26 from "../../images/l26.png";
import l27 from "../../images/l27.png";

const l = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21, l22, l23, l24, l25, l26, l27];

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
              <div className="codson style"
              
                onClick={() => this.setState({ isOpen: true })}
                ></div>
              {isOpen && (
                <Lightbox
                  mainSrc={l[photoIndex]}
                  nextSrc={l[(photoIndex + 1) % l.length]}
                  prevSrc={l[(photoIndex + l.length - 1) % l.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + l.length - 1) % l.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % l.length,
                    })
                  }
                />
              )}
          </span>
        </Col>      
    );
  }
}
