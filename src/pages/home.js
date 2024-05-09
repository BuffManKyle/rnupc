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
                
                <h5 className="textcenter"> 
                    Recovery Network provides you a unique opportunity for integrated treatment for those who are facing co-occurring and/or behavioral health disorders. Our clinical team of counselors, therapists, psychiatrists, and allied-health professionals aim to inspire inner healing, providing a state-certified blend of mental health and addiction services. Through individualized care, we encourage patients to achieve their own personal goals, guiding them to a better quality of life. We will coordinate with you to make sure a person in the midst of change has a safe, supportive transition. We appreciate your interest in Recovery Network as trusted providers of comprehensive co-occurring behavioral health treatment.
                </h5>
                
            </Col>
        </Row>
    </Container>

    <Container>
        <div className="grid-card-container">
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
                <Link to="/residential-substance-abuse-treatment">
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
                    <Link to="/anger-management">
                    <Card>
                    <Card.Img variant="top" src={rainbow} />
                    <Card.Body>
                    <Card.Title>Outpatient Anger Management</Card.Title>
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
            </Row>
        </div>
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