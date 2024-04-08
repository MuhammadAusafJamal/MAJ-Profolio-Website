import "./skill.scss";
import { Col, Container, Row } from "react-bootstrap";
import SkillCard from "./skillCard";
import html from '../../assets/Images/html.png'
import css from '../../assets/Images/css.png'
import js from '../../assets/Images/js.png'
import react from '../../assets/Images/React.png'
import sass from '../../assets/Images/sass.png'
import figma from '../../assets/Images/figma.png'
import mui from '../../assets/Images/mui.png'
import bootstrap from '../../assets/Images/bootstrap.png'
import fb from '../../assets/Images/firebase.png'



function Skill() {
    return (
        <main className="skill-container">
            <Container fluid="xxl">
                <Row>
                    <Col>
                        <div className="skill-content">
                            <section className="skill-top">
                                <span className="skill-title">
                                    My Expertise
                                </span>
                                <h2 className="skill-headline">Which <span className="color-primary">Tools</span> I Use</h2>
                            </section>
                            <section className="skill-bottom">
                                <section className="skill-bottom-left">
                                    <SkillCard img={html} title={"HTML 5"} prog={"95%"} />
                                    <SkillCard img={css} title={"CSS 3"} prog={"90%"} />
                                    <SkillCard img={js} title={"JavaScript"} prog={"80%"} />
                                    <SkillCard img={react} title={"React JS"} prog={"80%"} />
                                    <SkillCard img={mui} title={"Material UI"} prog={"70%"} />
                                    <SkillCard img={bootstrap} title={"BootStrap"} prog={"80%"} />
                                    <SkillCard img={sass} title={"SASS"} prog={"90%"} />
                                    <SkillCard img={figma} title={"Figma"} prog={"80%"} />
                                    <SkillCard img={fb} title={"FireBase"} prog={"70%"} />
                                </section>
                                {/* <section className="skill-bottom-right">
                                </section> */}
                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Skill;