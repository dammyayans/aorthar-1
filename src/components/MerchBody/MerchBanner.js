import React from "react";
import styled from "styled-components";

import "./style.css";
import addToCart from "../../images//add to cart.png";

import { Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img from "../../images/Mask Group 31.png";
// import img2 from "../../images/fait beauty2.png";
// import img3 from "../../images/pelumi4.png";
export default function MerchBanner(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <div
        className="d-block d-md-none d-lg-none"
        style={{ marginLeft: "-15px", width: "100vw" }}
      >
        <Slider {...settings}>
          <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4">
            <div
              className="merch-banner merch-banner1"
              style={{ width: "96vw" }}
            >
              {/* <img src={img} alt="" style={{ height: "100%", width: "100%" }} /> */}
              <div className="d-flex justify-content-space align-items-center inner-merch-banner smallestText">
                <p className="m-0 whiteText">Hoodie</p>
                <button className="cartButton" onClick={props.setHoodie}>
                  {props.hoodie ? (
                    "In cart "
                  ) : (
                    <span>
                      Add to cart{" "}
                      <img
                        src={addToCart}
                        width="18px"
                        height="18px"
                        alt="cart"
                        style={{ display: "inline-block" }}
                      />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </ProductWrapper>
          <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4">
            <div
              className="merch-banner merch-banner2"
              style={{ width: "96vw" }}
            >
              <div className="d-flex justify-content-space align-items-center inner-merch-banner smallestText">
                <p className="m-0 whiteText">The Big Heart</p>
                <button className="cartButton" onClick={props.setGreenie}>
                  {props.greenie ? (
                    "In cart "
                  ) : (
                    <span>
                      Add to cart{" "}
                      <img
                        src={addToCart}
                        width="18px"
                        height="18px"
                        alt="cart"
                        style={{ display: "inline-block" }}
                      />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </ProductWrapper>
          <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4">
            <div
              className="merch-banner merch-banner3"
              style={{ width: "96vw" }}
            >
              {/* <img src={img3} alt="" style={{ height: "100%", width: "100%" }}/> */}
              <div className="d-flex justify-content-space align-items-center inner-merch-banner smallestText">
                <p className="m-0 whiteText">Simple</p>
                <button className="cartButton" onClick={props.setBlackie}>
                  {props.blackie ? (
                    "In cart "
                  ) : (
                    <span>
                      Add to cart{" "}
                      <img
                        src={addToCart}
                        width="18px"
                        height="18px"
                        alt="cart"
                        style={{ display: "inline-block" }}
                      />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </ProductWrapper>
        </Slider>
      </div>
      <Row className="a-the-merch-banner mt-5">
        <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4 d-sm-none d-none d-md-block">
          <div className="merch-banner merch-banner1">
            {/* <img src={img} alt="" style={{ height: "100%", width: "100%" }} /> */}
            <div className="d-flex justify-content-space align-items-center inner-merch-banner smallestText">
              <p className="m-0 whiteText">Hoodie</p>
              <button className="cartButton" onClick={props.setHoodie}>
                {props.hoodie ? (
                  "In cart "
                ) : (
                  <span>
                    Add to cart
                    <img
                      src={addToCart}
                      width="18px"
                      height="18px"
                      alt="cart"
                    />
                  </span>
                )}
              </button>
            </div>
          </div>
        </ProductWrapper>
        <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4 d-sm-none d-none d-md-block">
          <div className="merch-banner merch-banner2">
            {/* <img src={img2} alt="" style={{ height: "100%", width: "100%" }} /> */}
            <div className="d-flex justify-content-space align-items-center inner-merch-banner smallestText">
              <p className="m-0 whiteText">The Big Heart</p>
              <button className="cartButton" onClick={props.setGreenie}>
                {props.greenie ? (
                  "In cart "
                ) : (
                  <span>
                    Add to cart
                    <img
                      src={addToCart}
                      width="18px"
                      height="18px"
                      alt="cart"
                    />
                  </span>
                )}
              </button>
            </div>
          </div>
        </ProductWrapper>
        <ProductWrapper className="col-md-4 col-sm-4 p-0 col-4 d-sm-none d-none d-md-block">
          <div className="merch-banner merch-banner3">
            {/* <img src={img3} alt="" style={{ height: "100%", width: "100%" }}/> */}
            <div className="d-flex justify-content-space align-items-center inner-merch-banner smallestText">
              <p className="m-0 whiteText">Simple</p>
              <button className="cartButton" onClick={props.setBlackie}>
                {props.blackie ? (
                  "In cart "
                ) : (
                  <span>
                    Add to cart
                    <img
                      src={addToCart}
                      width="18px"
                      height="18px"
                      alt="cart"
                    />
                  </span>
                )}
              </button>
            </div>
          </div>
        </ProductWrapper>
      </Row>
    </>
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
