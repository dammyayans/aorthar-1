import React, { Component } from "react";

import "./OurPackage.css";
import "../GlobalStyles/global.css";
import { Col } from "react-bootstrap";

export default class NewsletterSubscription extends Component {
  state = {
    email: "",
    message: "",
    color: "",
    messageboo: false,
  };
  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.validateEmail(this.state.email)) {
      this.setState({
        message: "Successful, Thank you for subscribing to our newsletter",
        color: "green",
        email: "",
        messageboo: true,
      });
      setInterval(() => this.setState({ messageboo: false }), 4000);
    } else {
      this.setState({
        message: "Please enter a valid email",
        color: "red",
        messageboo: true,
      });
      setInterval(() => this.setState({ messageboo: false }), 4000);
    }
    console.log(this.state.email);
  }
  render() {
    return (
      <Col xs={12} md={12} className="px-0 a-our-packages-heading push">
        <h1 className="bigText blackText">
          Subscribe to <span className="green">our</span>
          <br /> Newsletters
        </h1>
        <p className="blackText smallestText blackText b4 montserrat">
          Discover how companies all over the world use design to create and end
          up being a step ahead of the competition.
        </p>
        <div className="a-our-packages-form">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              placeholder="Type your email here"
              onChange={(e) => this.setState({ email: e.target.value })}
              className="emailInputs smallestText blackText b4 montserrat inputShadow"
            />
            <input
              value="Submit"
              type="submit"
              className="emailInputs montserrat"
            />
            {this.state.messageboo ? (
              <p style={{ color: this.state.color, textAlign: "center" }}>
                {this.state.message}
              </p>
            ) : null}
          </form>
        </div>
      </Col>
    );
  }
}
