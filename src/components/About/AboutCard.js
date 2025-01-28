import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyadharshini Desingu </span>
            from <span className="purple"> Pallipalayam, Tamil Nadu.</span>
            <br />
            I am Previously employed as a wordpress developer at Jicate.
            <br />
            I have completed MBA at JKKN College of Engineering and Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Art Work
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dream big, create boldly, and inspire endlessly!"{" "}
          </p>
          <footer className="blockquote-footer">Priyadharshini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
