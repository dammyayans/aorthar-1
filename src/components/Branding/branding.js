import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Col } from "react-bootstrap";

import id1 from "../../images/id/id1.png";
import id2 from "../../images/id/id2.png";
import id3 from "../../images/id/id3.png";
import id4 from "../../images/id/id4.png";
import id5 from "../../images/id/id5.png";
import id6 from "../../images/id/id6.png";
import id7 from "../../images/id/id7.png";
import id8 from "../../images/id/id8.png";
import id9 from "../../images/id/id9.png";
import id10 from "../../images/id/id10.png";
import id11 from "../../images/id/id11.png";
import id12 from "../../images/id/id12.png";
import id13 from "../../images/id/id13.png";
import id14 from "../../images/id/id14.png";
import id15 from "../../images/id/id15.png";
import id16 from "../../images/id/id16.png";
import id17 from "../../images/id/id17.png";
import id18 from "../../images/id/id18.png";
import id19 from "../../images/id/id19.png";
import id20 from "../../images/id/id20.png";
import id21 from "../../images/id/id21.png";

const img = [id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12, id13, id14, id15, id16, id17, id18, id19, id20, id21];

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
              <div className="bbranding style pushtt"
              
                onClick={() => this.setState({ isOpen: true })}>
                </div>
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
    );
  }
}



