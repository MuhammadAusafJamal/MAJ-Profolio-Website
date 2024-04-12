import "./contact.scss";
import address from "../../assets/Images/loction_icon02.png"
import phone from "../../assets/Images/phone_icon02.png"
import mail from "../../assets/Images/mail_icon02.png"
import git from "../../assets/Images/github.png"
import ln from "../../assets/Images/linkedin.png"
import wa from "../../assets/Images/whatsapp.png"
import fb from "../../assets/Images/facebook.png"
import CvBtn from "../Main Button/mainbutton";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";



function Contact() {
    return (
        <main className="contact-container" id="contact">
            <Container fluid="xxl">
                <Row>
                    <Col>

                        <div className="contact-content">
                            <section className="contact-top">
                                <span className="contact-title">
                                    Contact
                                </span>
                                <h2 className="contact-headline">Let's <span className="color-primary">Create</span> Something Together</h2>
                            </section>
                            <section className="contact-bottom">
                                <section className="contact-bottom-left">
                                    <h2 className="contact-bottom-left-heading">Send Us a Message 🚀</h2>
                                    <form action="https://formsubmit.co/e92fe7bf766d79943035baa698b4399e" method="POST">
                                        <input className="input" type="text" placeholder="Name" name="Name" />
                                        <input className="input" type="email" placeholder="Email" name="Email" />
                                        <textarea className="input placeholder" placeholder="Write your message here" name="Message" />
                                        <CvBtn type={"submit"} Cname={"submit-btn"} title={"Send Messsage"} />
                                    </form>


                                </section>
                                <section className="contact-bottom-right">
                                    <h2 className="contact-bottom-left-heading">Let's Chat</h2>
                                    <h2 className="contact-bottom-left-heading">Tell me about your project.</h2>

                                    <div className="address-icon-container icon-container">
                                        <img className="address-icon icon" src={address} alt="Address Icon" />
                                        <div className="head">
                                            <h2 className="heading">Address</h2>
                                            <p className="para">Karachi, Pakistan</p>
                                        </div>
                                    </div>
                                    <div className="mail-icon-container icon-container">
                                        <img className="mail-icon icon" src={mail} alt="Mail Icon" />
                                        <div className="head">
                                            <h2 className="heading">Email</h2>
                                            <p><a className='para' href="mailto:ausaffarooqui17@gmail.com">ausaffarooqui17@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="phone-icon-container icon-container">
                                        <img className="phone-icon icon" src={phone} alt="Phone Icon" />
                                        <div className="head">
                                            <h2 className="heading">Phone</h2>
                                            <p ><a className="para" href='tel:03482238001'>0348-2238001</a></p>
                                    </div>
                                </div>
                                <div className="social-container icon-container ">
                                    <p className="para social-line">Visit my socials and get connected</p>
                                    <div className="social-icon">
                                        <a target="_blank" href="https://github.com/MuhammadAusafJamal"> <img className="phone-icon icon" src={git} alt="Github" /></a>

                                        <a target="_blank" href="https://www.linkedin.com/in/muhammadausafjamal482238001/"><img className="phone-icon icon" src={ln} alt="LinkedIn" /></a>

                                        <a target="_blank" href="https://wa.me/+923482238001"><img className="phone-icon icon" src={wa} alt="WhatsApp" /></a>

                                        <a target="_blank" href="https://www.facebook.com/Muhammad.AusafK"><img className="phone-icon icon" src={fb} alt="FaceBook" /></a>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                </Col>
            </Row>
        </Container>
        </main >
    )
}

export default Contact;