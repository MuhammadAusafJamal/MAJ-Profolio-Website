import "./services.scss";
import { Container, Row, Col } from "react-bootstrap";
import "../../Components/Project/projects.scss";
import rDesign from "../../assets/Images/coding.png";
import react from "../../assets/Images/React.png";
import eCom from "../../assets/Images/eCom.png";
import ServiceCard from "../Service Card/serviceCard";



function Service() {
    return (
        <main className="service-container">
            <Container fluid="xxl">
                <Row>
                    <Col>
                        <div className="service-content">
                            <section className="service-top">
                                <span className="service-title">
                                    What I do
                                </span>
                                <h2 className="service-headline">What <span className="color-primary">Services</span> Do I Provide</h2>
                            </section>
                            <section className="service-bottom">
                                {/* <ServiceCard
                                    title={"Web Development"}
                                    description={"I specialize in creating Full Stack Website using modern technologies like MERN Stack (MongoDB, Express.js, React.js and Node.js) a perfect combination."}
                                    img={projImg2}
                                /> */}

                                <ServiceCard
                                    title={"React Application"}
                                    description={"My expertise lies in developing dynamic and intuitive web applications that prioritize user experience. I leverage modern technologies, such as React, to ensure seamless interactions and robust functionality, resulting in engaging user experiences."}
                                    img={react}
                                />

                                <ServiceCard
                                    title={"Responsive Designs"}
                                    description={"I excel in creating user-friendly UI/UX designs for both web and mobile applications. My focus is on crafting interfaces that enhance user engagement through thoughtful and purposeful design, starting from wireframes and extending to prototypes.."}
                                    img={rDesign}
                                />

                                <ServiceCard
                                    title={"E-Commerce  Development"}
                                    description={"I specialize in crafting user-centric and dynamic e-commerce websites, utilizing cutting-edge technologies to deliver seamless shopping experiences. From intuitive product catalogs to secure payment gateways, I ensure every element of the e-commerce platform is designed to enhance user engagement and drive conversions."}
                                    img={eCom}
                                />

                            </section>
                        </div>

                    </Col>
                </Row >
            </Container >
        </main >
    )
}

export default Service;