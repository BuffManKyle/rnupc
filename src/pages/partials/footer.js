import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css'
import React from "react";
import { Link } from 'react-router-dom';
import {Container, Col, Row, Button} from 'react-bootstrap';
import carf from '../assets/images/CARF.png'

function Footer () {
    return (
        <>
    <Container fluid className="footer-container">
        <Container>
        <Row>
            <Col lg={2} className="">
                <div className="d-grid">
                    <Button className="footer-button" size="lg" target="_blank" href="https://www.google.com/maps/place/21+W+25th+St,+Baltimore,+MD+21218/@39.3176731,-76.6206619,17z/data=!3m1!4b1!4m6!3m5!1s0x89c804e81f865cf1:0x4f54f9f477cbd248!8m2!3d39.317669!4d-76.618087!16s%2Fg%2F11hz9d5x54?entry=ttu">
                        Location
                    </Button>
                </div>
            </Col>
            <Col lg={2} className="">
                <div className="d-grid">
                    <Button className="footer-button" size="lg" as={Link} to="/contact">Contact Us</Button>
                </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
                <div>
                    <img 
                        src={carf}
                        alt="CARF"
                        className=""
                    />
                </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-center copyright align-items-center">
                <div>
                    <p>
                        © 2023 Recovery Network | All Rights Reserved | <Link className="copyright" to="/services">All Services</Link>
                    </p>
                </div>
            </Col>
        </Row>
        </Container>
   </Container>
</>
    )
};

export default Footer;