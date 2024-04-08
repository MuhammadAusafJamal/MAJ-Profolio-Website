import "./footer.scss";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <footer className="footer-container">
            <Container fluid="xxl">
                <Row>
                    <Col>

                        <main className="footer-content">
                            <section className="footer-left">
                                <p>Copyright © Muhammad Ausaf Jamal 2024. All Right Reserved</p>
                            </section>
                        </main>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;