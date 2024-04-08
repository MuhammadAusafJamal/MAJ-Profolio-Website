import "./projects.scss";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../../assets/Images/nlogo.png";
import proj from "../../assets/Images/h2_project_shape.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Project() {

  const Htmlprojects = [
    {
      title: "Foody Zone",
      description: "Landing Page",
      imgUrl: projImg2,
      Url: "https://www.youtube.com/"
    }, 
    {
      title: "Foody Zone",
      description: "Landing Page",
      imgUrl: projImg2,
      Url: "https://www.youtube.com/"
    }
  ];

  const Jsprojects = [
    {
      title: "Foody Zone",
      description: "Landing Page",
      imgUrl: projImg2,
      Url: "https://www.youtube.com/"
    }, {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      Url: "https://www.youtube.com/"
    }
  ];
  const Reactprojects = [
    {
      title: "Dice Guessing Game",
      description: "Design & Development",
      imgUrl: projImg2,
      Url: "https://www.youtube.com/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      Url: "https://www.youtube.com/"
    }
  ];

  return (
    <section className="project-container" id="projects">
      <img style={{
        position: "absolute",
        right: 0,
        top: 0,
        width:"500px"
      }} src={proj} alt="Bg" />
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`project-content ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <div className="project-top">
                    <span className="project-title">
                      Portfolio
                    </span>
                    <h2 className="project-headline">Explore my <span className="color-primary">work</span></h2>
                  </div>
                  <div className="project-bottom">
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">HTML/CSS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">JavaScript</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">React</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              Htmlprojects.map((Htmlprojects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...Htmlprojects}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                              Jsprojects.map((Jsprojects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...Jsprojects}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {
                              Reactprojects.map((Reactprojects, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...Reactprojects}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default Project;
