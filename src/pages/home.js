import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import React from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';
import carf from './assets/images/CARF.png'
import introimg from './assets/images/mountain top.png'
import classroom from './assets/images/pexels-photo-6602623.jpeg'
import beach from './assets/images/pexels-photo-694587.webp'

function Home () {
    return (
    <>
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
    <Container>
        <Row className="content-row">
            <h4 className=""> 
                The adept professionals at Recovery Network bring forth extensive expertise in the realms of substance abuse and mental health. This reservoir of experience empowers us to offer specialized guidance and compassionate assistance to communities throughout Baltimore. Our central mission revolves around facilitating individuals in their journey to regain control over their lives. Should you or a cherished individual require counseling services related to substance abuse or mental health, particularly if the idea of seeking support appears overwhelming, be reassured that our committed team is on hand to provide the essential aid and direction.
            </h4>
        </Row>
    </Container>

    <Container>
        <Row>
            <Col lg={4} className="grid-card">
                <Card>
                <Card.Img variant="top" src={beach} />
                <Card.Body>
                <Card.Title>Outpatient Substance Abuse</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4} className="grid-card">
            <Card>
                <Card.Img variant="top" src={classroom} />
                <Card.Body>
                <Card.Title>Residential Programs</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4} className="grid-card">
                    <Card>
                <Card.Img variant="top" src={classroom} />
                <Card.Body>
                <Card.Title>Outpatient Mental Health</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col lg={4} className="grid-card">
                    <Card>
                <Card.Img variant="top" src={classroom} />
                <Card.Body>
                <Card.Title>Psychiatric Rehabilitation Program</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4} className="grid-card">
                    <Card>
                <Card.Img variant="top" src={classroom} />
                <Card.Body>
                <Card.Title>Medication Management</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={4} className="grid-card">
                    <Card>
                <Card.Img variant="top" src={classroom} />
                <Card.Body>
                <Card.Title>Resources</Card.Title>
                </Card.Body>
                </Card>
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
        <Container>
        <Row className="content-row">
            <h4>
                The primary mission of Recovery Network is to nurture a treatment environment characterized by responsiveness and respect towards patients and families. Our overarching goal is to establish a culturally proficient continuum of evidence-based practices encompassing substance abuse, mental health, and case management. These practices are designed to expedite the attainment of bio-psychosocial equilibrium and successful reintegration into the community. An integral facet of our program revolves around fostering cultural awareness, deepening the understanding of how patients' social and cultural norms influence their behaviors and treatment experiences. Additionally, our unwavering commitment to cultural competence ensures that all individuals we serve, regardless of age, race, creed, sexual preference, gender identity, or socio-economic status, receive services that uphold equity and sensitivity to their diverse backgrounds.
            ​</h4>
        </Row>
        </Container>
    <div className="hero" >
        <Container>
        <div className="">
            <h1 className="hero-heading "> 
            Our Vision
            </h1>
        </div>
        </Container>
    </div>

    <Container>
        <Row className="content-row">
            <Col lg="6" md="auto" className="d-flex align-items-center justify-content-center">
                <h4>“University Psychological Center, Inc. – dba, Recovery Network’s vision is to promote change, growth, and wellness to individuals and families in the community.”
            ​   </h4>
            </Col>
            <Col lg="6" md="auto"  className="">
                <h1>Core Values</h1>
                <ul>
                    <li>
                        Integrity- Ethical Care with Sound Construction
                    </li>
                    <li>
                        Diversity- Cultural Competencies with the Promotion of Inclusion and Diversity
                    </li>
                    <li>
                        Civility- Interactions of Staff and Patients are Professional, Respectful, and Courteous
                    </li>
                    <li>
                        Innovation- Blending Traditional and New-Age Methodologies for Integration of Care
                    </li>
                    <li>
                        Excellence- Constant Pursuit of Excellence
                    </li>
                </ul>
            </Col>
    </Row>
    </Container>
    
     </>
    )
};

export default Home;