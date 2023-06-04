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
import illustrationtest from './assets/images/BuffManKyle_group_of_men_and_women_soft_teal_peach_and_yellow_c_feeb9f72-92b6-4849-a371-010a9ea5b8c9.png'
import illustrationtest2 from './assets/images/BuffManKyle_group_of_people_soft_teal_peach_and_yellow_colors.__efa2fbea-459f-4de0-bd70-caa089e48abb.png'
import carf from './assets/images/CARF.png'

function Home () {
    return (
    <>
    <div className="hero" >
        <img 
        className="header-illustration"
        src={headerillustration}
        alt="Header img"
        />
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
                Recovery Network and University Psychological Center offer integrated treatment for co-occurring and behavioral health disorders. Our team of professionals provides state-certified mental health and addiction services, inspiring inner healing. We focus on individualized care to help patients achieve personal goals and improve their quality of life. We ensure a safe and supportive transition during times of change. Thank you for considering us as trusted providers of comprehensive co-occurring behavioral health treatment.
            </h4>
        </Row>
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
                Our Mission
            </h1>
        </div>
        </Container>
    </div>
        <Container>
        <Row className="content-row">
            <h4>
            “The mission of University Psychological Center, Inc. – dba, Recovery Network, is to foster a treatment environment that is both responsive and respectful to patients and families while providing a culturally competent continuum of evidence based substance abuse, mental health and case management practices, which expedite bio-psychosocial stabilization and re-entry into the community. The program’s goal of cultural awareness, or understanding the influences of patients social and cultural norms as it relates to behaviors and treatment, and cultural competence, as it relates to all persons served regardless of age, race, creed, sexual preference, gender identity, or socio-economic status.”
​           </h4>
        </Row>
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
    <div className="hero" >
        <img 
        className="header-illustration"
        src={illustrationtest}
        alt="Header img"
        />
       
    </div>
    <div className="hero" >
        <img 
        className="header-illustration"
        src={illustrationtest2}
        alt="Header img"
        />
       
    </div>
     </>
    )
};

export default Home;