import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, Url }) {
  return (
    <Col  onClick={() => window.open(Url)}>
      <div className="project-card-container">
        <div className="project-card-content">
          <img className="project-image" src={imgUrl} alt="Project Image" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;
