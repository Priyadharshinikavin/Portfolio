import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import techg from "../../Assets/Projects/techg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          The project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={techg}
              isBlog={false}
              title="TechG"
              description="A web services company website built with Next.js. It utilizes Ant Design for high-quality UI components, react-awesome-reveal for smooth animations, and styled-components for modular styling. The site provides a modern, responsive user experience with a focus on performance and maintainability."
              demoLink="https://techguide-website.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
