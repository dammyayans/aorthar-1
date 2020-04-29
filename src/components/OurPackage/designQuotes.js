import React, { Component } from "react";

import "./OurPackage.css";
import "../GlobalStyles/global.css";
import { Col } from "react-bootstrap";

export default class designQuotes extends Component {
  state = {
    quote: { quote: "", author: "" },
  };
  quotes = [
    {
      quote: "The Design Thinking Process is a blend of Heart, Head and Hand.",
      author: "Evan you",
    },
    {
      quote:
        "It is only when they go wrong that machines remind you how powerful they are.",
      author: "Jeff Bezos",
    },
    {
      quote:
        "If you think patient is a virtual, try surfing the net without high speed internet",
      author: "Dev ed",
    },
    {
      quote: "The Design Thinking Process is a blend of Heart, Head and Hand.",
      author: "Yu Siang Teo",
    },
  ];
  randomQuoteGenerator = () =>
    this.quotes[Math.floor(Math.random() * this.quotes.length)];
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ quote: this.randomQuoteGenerator() });
    }, 4000);
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }
  render() {
    return (
      <Col xs={12} md={12} className="px-0 a-our-packages-quotes whitebg">
        <Col className="justify-content-md-center montserrat">
          <p>{this.state.quote.quote}</p>
          <span className="blackText bold">- {this.state.quote.author}</span>
        </Col>
      </Col>
    );
  }
}
