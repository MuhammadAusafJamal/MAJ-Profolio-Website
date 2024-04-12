import './header.scss';
import logo from '../../assets/Images/ll.png';
import { FaDownload } from "react-icons/fa";
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import LayoutModal from './modal';
import { Container, Row, Col, Form, Nav } from "react-bootstrap";



function Header() {

    const [activeLink, setActiveLink] = useState("");

    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header-container ${scrolled ? "sticky-header" : ""}`}>
            <Container fluid="xxl">
                <Row>
                    <Col>
                        <div className='header-content'>
                            <section className='left-container-brand'>
                                <h5 className='main-logo'>{`<MuhammadAusafJamal />`}</h5>
                                <h5 className='mini-logo'>{`<MAJ/>`}</h5>
                            </section>
                            <nav className='center-container-nav'>
                                <Form className='options'>
                                    <Nav.Link onClick={() => handleSetActive("home")} href="#home" className={` list ${activeLink === "home" ? "active" : ""}`}>
                                        Home
                                    </Nav.Link>
                                    <Nav.Link onClick={() => handleSetActive("about")} href="#about" className={` list ${activeLink === "about" ? "active" : ""}`}>
                                        About
                                    </Nav.Link>
                                    <Nav.Link onClick={() => handleSetActive("skills")} href="#skills" className={` list ${activeLink === "skills" ? "active" : ""}`}>
                                        Skills
                                    </Nav.Link>
                                    <Nav.Link onClick={() => handleSetActive("services")} href="#services" className={` list ${activeLink === "services" ? "active" : ""}`}>
                                        Services
                                    </Nav.Link>
                                    <Nav.Link onClick={() => handleSetActive("portfolio")} href="#portfolio" className={` list ${activeLink === "portfolio" ? "active" : ""}`}>
                                        Portfolio
                                    </Nav.Link>
                                    <Nav.Link onClick={() => handleSetActive("contact")} href="#contact" className={` list ${activeLink === "contact" ? "active" : ""}`}>
                                        Contact
                                    </Nav.Link>
                                </Form>
                            </nav>

                            {/* <MainButton event={openCv} Cname={`header-cv`} title={"Download CV"} icon={<FaDownload />} /> */}

                            <div className="menu-modal">
                                <LayoutModal />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
















