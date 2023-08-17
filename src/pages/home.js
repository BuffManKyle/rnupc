import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React from "react";
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card} from 'react-bootstrap';
import carf from './assets/images/CARF.png';
import introimg from './assets/images/mountain top.png';
import rainbow from './assets/images/rainbow-7350780_1280.jpg';
import lake from './assets/images/lake-7340473_1280.jpg';
import sunset from './assets/images/wedding-7335258_1280.jpg';
import beach from './assets/images/couple-7231599_1280.jpg';
import family from './assets/images/family-7257182_1280.jpg';
import man from './assets/images/man-7239061_1280.jpg';

function Home () {
    return (
    <>
    <div className="hero-container">
    <div className="hero" >
        <div className="">
        <img
        src={introimg}
        alt="Hero sky"
        className="hero-img"
        />
        </div>
        <img 
        src={carf}
        alt="CARF"
        className="carf-pos hide-on-mobile "
        />
        <Container>
        <div className="">
            <h1 className="hero-heading"> 
                Healing and Recovery: Integrated Treatment Solutions
            </h1>
        </div>
        </Container>
    </div>
    </div>
    <Container fluid>
        <Row className="Jumbotron d-flex justify-content-center">
            <Col lg={7}>
                
                <h5 className="textcenter paragraph-line"> 
                    The adept professionals at Recovery Network bring forth extensive expertise in the realms of substance abuse and mental health. This reservoir of experience empowers us to offer specialized guidance and compassionate assistance to communities throughout Baltimore. Our central mission revolves around facilitating individuals in their journey to regain control over their lives. Should you or a cherished individual require counseling services related to substance abuse or mental health, particularly if the idea of seeking support appears overwhelming, be reassured that our committed team is on hand to provide the essential aid and direction.
                </h5>
                
            </Col>
        </Row>
    </Container>

    <Container>
        <Row>
            <Col lg={4} className="grid-card">
                <Link to="/substance-abuse-counseling">
                <Card>
                <Card.Img variant="top" src={sunset} />
                <Card.Body>
                <Card.Title>Outpatient Substance Abuse Counseling</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={4} className="grid-card">
            <Link to="/residential">
                <Card>
                <Card.Img variant="top" src={man} />
                <Card.Body>
                <Card.Title>Residential Substance Abuse Treatment</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={4} className="grid-card">
                <Link to="/mental-health-therapy">
                <Card>
                <Card.Img variant="top" src={lake} />
                <Card.Body>
                <Card.Title>Outpatient Mental Health Therapy</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
        </Row>

        <Row>
            <Col lg={4} className="grid-card">
                <Link to="/psychiatric-rehabilitation-program">
                <Card>
                <Card.Img variant="top" src={beach} />
                <Card.Body>
                <Card.Title>Psychiatric Rehabilitation Program</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={4} className="grid-card">
                <Link to="/medication-managment">
                <Card>
                <Card.Img variant="top" src={family} />
                <Card.Body>
                <Card.Title>Medication Management</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={4} className="grid-card">
                <Link to="/medication-assisted-treatment">
                <Card>
                <Card.Img variant="top" src={rainbow} />
                <Card.Body>
                <Card.Title>Medication Assisted Treatment</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
        </Row>
    </Container>
     
    <div className="hero" >
        <Container>
        <div className="">
            <h1 className="hero-heading "> 
                Our Mission
            </h1>
        </div>
        </Container>
    </div>
    <div className="hero" >
        <Container>
        <div className="">
            <h1 className="hero-heading "> 
            Our Vision
            </h1>
        </div>
        </Container>
    </div>


    
     </>
    )
};

export default Home;