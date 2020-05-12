import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import "./OurPackage.css";
import "../GlobalStyles/global.css";
import { Col } from "react-bootstrap";

export default class designQuotes extends Component {
  state = {
    quote: { quote: "", author: "" },
    change: false,
  };
  quotes = [
    {
      quote: "The Design Thinking Process is a blend of Heart, Head and Hand.",
      author: "Evan You",
    },
    {
      quote: "Design is intelligence made visible.",
      author: "Alina Wheeler",
    },
    {
      quote: "Every great design begins with an even better story.",
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
      quote:
        "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      quote: "Make it simple, but significant.",
      author: "Don Draper",
    }
  ];
  randomQuoteGenerator = () =>
    this.quotes[Math.floor(Math.random() * this.quotes.length)];
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        quote: this.randomQuoteGenerator(),
        change: !this.state.change,
      });
    }, 4000);
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }
  render() {
    return (
      <Col xs={12} md={12} className="px-0 a-our-packages-quotes">
        <Col className="justify-content-md-center">
          <Zoom bottom spy={this.state.change} duration={600}>
            <p className="quoteText">{this.state.quote.quote}</p>
          </Zoom>
          <Zoom spy={this.state.change} duration={600} delay={300}>
            <span className="blackText bold montserrat">- {this.state.quote.author}</span>
          </Zoom>
        </Col>
      </Col>
    );
  }
}
