import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Karan Chrish R S </span>
            from <span className="purple"> Kannyakumari, India.</span>
            <br />
            I am currently a Final year Student at Karpagam College of Engineering.
            <br />
            I am Pursing B.Tech Artificail Intelligence and Data Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Fun with Kids
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every thing is Connected, Data : Decision"{" "}
          </p>
          <footer className="blockquote-footer">R S Karan chrish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
