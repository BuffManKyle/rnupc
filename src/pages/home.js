import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import React from "react";
import {Container} from 'react-bootstrap';
import headerillustration from './assets/images/DALL-E-website-heading-illistration.png'

function Home () {
    return (
    <>
    <div className="heading-hero" >
        <img 
        className="header-illustration"
        src={headerillustration}
        alt="Header img"
        />
        <Container>
        <div className="hero-blur">
            <p className="heading-hero-text hide-on-mobile"> 
                Recovery Network and University Psychological Center offer integrated treatment for co-occurring and behavioral health disorders. Our team of professionals provides state-certified mental health and addiction services, inspiring inner healing. We focus on individualized care to help patients achieve personal goals and improve their quality of life. We ensure a safe and supportive transition during times of change. Thank you for considering us as trusted providers of comprehensive co-occurring behavioral health treatment.
            </p>
        </div>
        </Container>
    </div>
    <Container >
    
     
    <h1>Mission Statement</h1>
    <p>“The mission of University Psychological Center, Inc. – dba, Recovery Network, is to foster a treatment environment that is both responsive and respectful to patients and families while providing a culturally competent continuum of evidence based substance abuse, mental health and case management practices, which expedite bio-psychosocial stabilization and re-entry into the community. The program’s goal of cultural awareness, or understanding the influences of patients social and cultural norms as it relates to behaviors and treatment, and cultural competence, as it relates to all persons served regardless of age, race, creed, sexual preference, gender identity, or socio-economic status.”
​   </p>

    <h1>Vision Statement</h1>
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