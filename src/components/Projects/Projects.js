import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/MR.png";
import chatify from "../../Assets/Projects/Mini.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mini Gemini"
              description="This Streamlit web app helps with tasks like handling images, PDFs, and chat searches. It uses Google's advanced AI models for things like summarizing PDFs, analyzing databases, and understanding images. It's made for developers and creators to boost their productivity with these powerful AI features ."
              ghLink="https://github.com/Karanchrish/Mini-Gemini"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Crowdsourcing Platform"
              description="I developed a freelancing platform where users can post jobs and complete them. Using HTML, CSS, and Django, the project is hosted on GitHub and set up to run automatically with Jenkins. The platform makes it easier for employers and freelancers to connect and work together efficiently ."
              ghLink="https://github.com/Karanchrish/Crowding-Sourcing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Movie Recommendation"
              description="I’m developing a Movie Recommender System using Python, deep learning, and the TMDB API. This project uses natural language processing to analyze movie descriptions and recommend similar films based on what users like. By employing cosine similarity, it offers personalized movie suggestions to help users discover new films they might enjoy ."
              ghLink="https://github.com/Karanchrish/Movie-Recommendation"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cryptocurrency Trends"
              description="I’m creating a cryptocurrency forecast tool using Power BI to predict future market trends with mathematical precision. This tool helps traders analyze the market and make informed investment decisions based on projected movements. By combining data analysis and visualization, it provides investors with accurate insights into cryptocurrency markets ."
              ghLink="https://github.com/Karanchrish/Cryptocurrency-Dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
