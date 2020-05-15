import React from "react";
import styled from "styled-components";

import "./style.css";
import addToCart from "../../images//add to cart.png";

import { Row } from "react-bootstrap";
// import img from "../../images/Mask Group 31.png";
// import img2 from "../../images/fait beauty2.png";
// import img3 from "../../images/pelumi4.png";
export default function MerchBanner(props) {
  return (
    <Row className="a-the-merch-banner mt-5">
      <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4">
        <div className="merch-banner merch-banner1">
          {/* <img src={img} alt="" style={{ height: "100%", width: "100%" }} /> */}
          <div className="d-flex justify-content-space align-items-center inner-merch-banner">
            <p className="m-0 whiteText">The Big Heart</p>
            <button className="cartButton" onClick={props.setHoodie}>
              {props.hoodie ? (
                "In cart "
              ) : (
                <span>
                  Add to cart
                  <img src={addToCart} width="18px" height="18px" alt="cart" />
                </span>
              )}
            </button>
          </div>
        </div>
      </ProductWrapper>
      <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4">
        <div className="merch-banner merch-banner2">
          {/* <img src={img2} alt="" style={{ height: "100%", width: "100%" }} /> */}
          <div className="d-flex justify-content-space align-items-center inner-merch-banner">
            <p className="m-0 whiteText">The Big Heart</p>
            <button className="cartButton" onClick={props.setGreenie}>
              {props.greenie ? (
                "In cart "
              ) : (
                <span>
                  Add to cart
                  <img src={addToCart} width="18px" height="18px" alt="cart" />
                </span>
              )}
            </button>
          </div>
        </div>
      </ProductWrapper>
      <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4">
        <div className="merch-banner merch-banner3">
          {/* <img src={img3} alt="" style={{ height: "100%", width: "100%" }}/> */}
          <div className="d-flex justify-content-space align-items-center inner-merch-banner">
            <p className="m-0 whiteText">The Big Heart</p>
            <button className="cartButton" onClick={props.setBlackie}>
              {props.blackie ? (
                "In cart "
              ) : (
                <span>
                  Add to cart
                  <img src={addToCart} width="18px" height="18px" alt="cart" />
                </span>
              )}
            </button>
          </div>
        </div>
      </ProductWrapper>
    </Row>
  );
}

const ProductWrapper = styled.div`
  &:hover {
    .inner-merch-banner {
      z-index: 2;
    }
  }
  .inner-merch-banner {
    position: absolute;
    bottom: 32px;
    right: 16px;
    left: 16px;
    z-index: -1;
    transition: all 0.3s ease-in;
  }
`;
