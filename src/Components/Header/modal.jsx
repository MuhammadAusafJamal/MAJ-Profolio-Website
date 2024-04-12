import './header.scss';
import "/src/assets/colors.scss";
import { FaBars, FaDownload } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import MainButton from '../Main Button/mainbutton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CV from "../../assets/Muhammad's Resume.pdf"
import { useState } from 'react';

function LayoutModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeLink, setActiveLink] = useState("");

    const handleSetActive = (link) => {
        setActiveLink(link);
    };
    const openCv = () => {
        window.open(CV, '_blank');
    }

    return (
        <>
            <FaBars
                style={{
                    cursor: "pointer",
                    color: "#F89E52",
                }}
                size={25}
                onClick={handleShow} />

            <Offcanvas show={show} onHide={handleClose} backdropClassName='static' >
                <Offcanvas.Header closeButton style={{ background: "#292930" }} >
                    <Offcanvas.Title className='offcavvas-title'>
                        <h5 className='main-logo'>{`<MuhammadAusafJamal />`}</h5>
                        <h5 className='mini-logo'>{`<MAJ/>`}</h5>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ background: "#292930" }}>
                    <Form className='modal-options'>
                        {/* <Nav.Link onClick={() => {
                            handleClose()
                            handleSetActive("home")
                        }} href="#home" className={` list ${activeLink === "home" ? "active" : ""}`}>
                            Home
                        </Nav.Link> */}
                        <Nav.Link onClick={() => {
                            handleClose()
                            handleSetActive("about")
                        }} href="#about" className={` list ${activeLink === "about" ? "active" : ""}`}>
                            About
                        </Nav.Link>
                        <Nav.Link onClick={() => {
                            handleClose()
                            handleSetActive("skills")
                        }} href="#skills" className={` list ${activeLink === "skills" ? "active" : ""}`}>
                            Skills
                        </Nav.Link>
                        <Nav.Link onClick={() => {
                            handleClose()
                            handleSetActive("services")
                        }} href="#services" className={` list ${activeLink === "services" ? "active" : ""}`}>
                            Services
                        </Nav.Link>
                        <Nav.Link onClick={() => {
                            handleClose()
                            handleSetActive("portfolio")
                        }} href="#portfolio" className={` list ${activeLink === "portfolio" ? "active" : ""}`}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link onClick={() => {
                            handleClose()
                            handleSetActive("contact")
                        }} href="#contact" className={` list ${activeLink === "contact" ? "active" : ""}`}>
                            Contact
                        </Nav.Link>
                    </Form>
                    <MainButton event={openCv} Cname={`modal-cv-btn`} title={"Download CV"} icon={<FaDownload />} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}





export default LayoutModal;