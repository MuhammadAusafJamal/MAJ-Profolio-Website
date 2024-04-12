import "./about.scss";
import about from "../../assets/Images/h2_about_img.png";
import heroImage1 from "../../assets/Images/h2_banner_shape01.png"
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css'


function About(isVisible) {
    return (
        <main className="about-container" id="about">
            <Container fluid="xxl">
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className="about-content">
                                    <section className={`about-left ${isVisible ? "animate__animated animate__fadeOut" : ""}`}>
                                        <span className="about-title">
                                            About me
                                        </span>
                                        <h2 className="about-headline">Professional <span className="main">Front End Solutions</span> for your Website </h2>
                                        <p className="paragraph">
                                            Hello, I'm Muhammad Ausaf Jamal, a passionate web developer with 2 years of experience. I enjoy every aspect of the design process, from initial discussion to final implementation.<br />
                                            Pursuing my Computer Science degree at the University of Karachi, UBIT, I specialize in React, JavaScript, Firebase, HTML, CSS, and SASS,  creating visually appealing and functional websites.<br />
                                            I stay updated with upcoming technologies to contribute to innovative projects, believing in the power of technological revolution to solve modern-day problems.
                                        </p>
                                    </section>

                                    <section className={`about-right ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
                                        <img className="about-image" src={about} alt="about-image" />
                                    </section>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default About;