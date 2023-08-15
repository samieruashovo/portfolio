import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Samier Uddin Ahammad Shovo </span>
            from <span className="purple"> Dhaka, Bangladesh. </span>I develope
            mobile app using <span className="purple">Flutter </span>, Web app
            using <span className="purple">ReactJs </span>, Backend using{" "}
            <span className="purple">Django </span>.
            <br />
            <br />
            I'm currently learning Machine Learning & artificial intelligence.
            <br />I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Making new friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech videos
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
