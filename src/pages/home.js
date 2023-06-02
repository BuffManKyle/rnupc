import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import headerillustration from './assets/images/DALL-E-website-heading-illistration.png'
import simpleillustration1 from './assets/images/simple-illustration-v1.png'
import simpleillustration3 from './assets/images/simple-illustration-v3.png'
import upctreelogo from './assets/images/UPC-tree-v2.png'
import upccirclelogo from './assets/images/UPC-circletree-v1.png';
import upcflowerlogo from './assets/images/UPC-flower-v1.png';

function Home () {
    return (
    <>
    <div className="hero" >
        <img 
        className="header-illustration"
        src={headerillustration}
        alt="Header img"
        />
        <Container>
        <div className="">
            <p className="hero-text "> 
                Recovery Network and University Psychological Center offer integrated treatment for co-occurring and behavioral health disorders. Our team of professionals provides state-certified mental health and addiction services, inspiring inner healing. We focus on individualized care to help patients achieve personal goals and improve their quality of life. We ensure a safe and supportive transition during times of change. Thank you for considering us as trusted providers of comprehensive co-occurring behavioral health treatment.
            </p>
        </div>
        </Container>
    </div>
    <Container>
    <Row>
        <Col>
        <img 
        src={upctreelogo}
        className="header-illustration"
        alt="Example of logo, Tree"/>
        </Col>
        <Col>
        <img 
        src={upccirclelogo}
        className="header-illustration"
        alt="example of logo, circle tree"/>
        </Col>
        <Col>
        <img 
        src={upcflowerlogo}
        className="header-illustration"
        alt="example of logo, flower"/>
        </Col>
    </Row>
    </Container>
     
    <div className="hero" >
        <img 
        className="header-illustration"
        src={simpleillustration1}
        alt="Header img"
        />
        <Container>
        <div className="">
            <h1 className="hero-heading "> 
                Mission Statement
            </h1>
        </div>
        </Container>
    </div>
        <Container>
            <p>
            “The mission of University Psychological Center, Inc. – dba, Recovery Network, is to foster a treatment environment that is both responsive and respectful to patients and families while providing a culturally competent continuum of evidence based substance abuse, mental health and case management practices, which expedite bio-psychosocial stabilization and re-entry into the community. The program’s goal of cultural awareness, or understanding the influences of patients social and cultural norms as it relates to behaviors and treatment, and cultural competence, as it relates to all persons served regardless of age, race, creed, sexual preference, gender identity, or socio-economic status.”
​           </p>
        </Container>
    <div className="hero" >
        <img 
        className="header-illustration"
        src={simpleillustration3}
        alt="Header img"
        />
        <Container>
        <div className="">
            <h1 className="hero-heading "> 
            Vision Statement
            </h1>
        </div>
        </Container>
    </div>

    <Container >
    <p>“University Psychological Center, Inc. – dba, Recovery Network’s vision is to promote change, growth, and wellness to individuals and families in the community.”
​   </p>

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
    <p>Coming Soon, CARF Accreditation process. Click here to learn more! 
        Haga clic aquí para español
    </p>
    </Container>
     </>
    )
};

export default Home;