import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vscanner from "../../Assets/Projects/vscanner.jpg";
import docscanner from "../../Assets/Projects/docscanner.jpg";
import tetris from "../../Assets/Projects/tetris.jpg";
import mpt from "../../Assets/Projects/periodic_t.jpg";

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
              imgPath={tetris}
              isBlog={false}
              title="Tetris Classic"
              description="Classic game made with Flutter. It has more than 18 themes, 6 game levels & many language suppoort."
              demoLink="https://play.google.com/store/apps/details?id=com.violettechapp.tetris"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vscanner}
              isBlog={false}
              title="VScanner"
              description="A mobile app made with Flutter. It can scan all types of qr and barcodes. Also it can create customized qr code."
              demoLink="https://play.google.com/store/apps/details?id=com.violettechapp.vscanner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mpt}
              isBlog={false}
              title="Modern Periodic Table"
              description="Moden Periodic Table App. It shows all the information about all the elements in periodic table. It also shows 3d Bohr model of every atom and 3d objects of every elements."
              demoLink="https://play.google.com/store/apps/details?id=com.violettechapp.modern_periodic_table"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docscanner}
              isBlog={false}
              title="DocScanner"
              description="Docscanner a pdf maker & reader. It can create pdf from image, extract texts from images. It also has qr code & barcode scan ability."
              demoLink="https://play.google.com/store/apps/details?id=com.violettechapp.resizable_image"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
