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
      author: "Evan You",
    },
    {
      quote:
        "Design is intelligence made visible.",
      author: "Alina Wheeler",
    },
    {
      quote:
        "Every great design begins with an even better story.",
      author: " Lorinda Mamo, designer",
    },
    {
      quote: "The function of design is letting design function.",
      author: "Micha Commeren, designer",
    },
    {
      quote: "Design is a formal response to a strategic question.",
      author: "Mariona Lopez",
    },
    {
      quote: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      quote: "Make it simple, but significant.",
      author: "Don Draper",
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
          <p className="mediumText">{this.state.quote.quote}</p>
          <span className="blackText bold">- {this.state.quote.author}</span>
        </Col>
      </Col>
    );
  }
}
