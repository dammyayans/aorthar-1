import React from "react";
import styled from "styled-components";

import "./style.css";
import addToCart from "../../images//add to cart.png";

import { Row } from "react-bootstrap";

export default function MerchBanner() {
  return (
    <Row className="a-the-merch-banner">
      <ProductWrapper className="merch-banner col-md-4">
        <div className="d-flex justify-content-space align-items-center inner-merch-banner">
          <p className="m-0 whiteText">The Big Heart</p>
          <button className="cartButton">
            Add to cart{" "}
            <img src={addToCart} width="18px" height="18px" alt="cart" />
          </button>
        </div>
      </ProductWrapper>
      <ProductWrapper className="merch-banner col-md-4">
        <div className="d-flex justify-content-space align-items-center inner-merch-banner">
          <p className="m-0 whiteText">The Big Heart</p>
          <button className="cartButton">
            Add to cart{" "}
            <img src={addToCart} width="18px" height="18px" alt="cart" />
          </button>
        </div>
      </ProductWrapper>
      <ProductWrapper className="merch-banner col-md-4">
        <div className="d-flex justify-content-space align-items-center inner-merch-banner">
          <p className="m-0 whiteText">The Big Heart</p>
          <button className="cartButton">
            Add to cart{" "}
            <img src={addToCart} width="18px" height="18px" alt="cart" />
          </button>
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
    bottom: 24px;
    right: 24px;
    left: 24px;
    bottom: 24px;
    right: 24px;
    z-index: -1;
    left: 24px;
    transition: all 0.3s ease-in;
  }
`;
