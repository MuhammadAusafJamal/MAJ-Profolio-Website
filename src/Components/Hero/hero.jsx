import "./hero.scss";
import Typewriter from 'typewriter-effect';
import gif from "../../assets/Images/animation.json";
import MainButton from "../Main Button/mainbutton";
// import banner from "../../assets/Images/banner_img.png"
import banner from "../../assets/Images/slider_img01.png"
import heroImage1 from "../../assets/Images/h2_banner_shape01.png"
import heroImage2 from "../../assets/Images/h2_banner_shape02.png"
import heroImage3 from "../../assets/Images/h2_banner_shape03.png"
import heroImage4 from "../../assets/Images/h2_banner_shape04.png"
import { FaDownload } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function Hero() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: gif,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }

    };

    {/* <Lottie
                            options={defaultOptions}
                            height={"500"}
                            width={"500"}
                        /> */}
    return (
        <main className="hero-container" id="home">
            <Container fluid="xxl">
                <Row>
                    <Col>
                        <div className="hero-content">
                            <div className="hero4">
                                <img className="hero-img3" src={heroImage4} alt="Banner Image" />
                            </div>
                            <section className="hero-left">
                                <img className="hero-img" src={banner} alt="Banner Image" />
                                {/* <div className="hero1">
                        <img className="hero-img1" src={heroImage2} alt="Banner Image" />
                    </div> */}
                                <div className="hero2">
                                    <img className="hero-img2" src={heroImage1} alt="Banner Image" />
                                </div>
                                {/* <div className="hero3">
                        <img className="hero-img3" src={heroImage3} alt="Banner Image" />
                    </div> */}

                            </section>
                            <section className="hero-right">
                                <span className="span-name">
                                    Hello, I am
                                </span>
                                <h2 className="heading">
                                    Muhammad Ausaf Jamal
                                    <span className="heading typewriter-headline">
                                        <Typewriter
                                            options={{
                                                strings: ["Front-End Developer", 'React Developer'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </span>
                                </h2>
                                <MainButton Cname={`hero-btn`} title={"Download CV"} icon={<FaDownload />} />
                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Hero;