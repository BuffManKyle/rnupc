import {Container, Col, Row} from 'react-bootstrap';

function About () {
    return (
    <>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>About</h1>
                <p>
                    The primary mission of Recovery Network is to nurture a treatment environment characterized by responsiveness and respect towards patients and families. Our overarching goal is to establish a culturally proficient continuum of evidence-based practices encompassing substance abuse, mental health, and case management. These practices are designed to expedite the attainment of bio-psychosocial equilibrium and successful reintegration into the community. An integral facet of our program revolves around fostering cultural awareness, deepening the understanding of how patients' social and cultural norms influence their behaviors and treatment experiences. Additionally, our unwavering commitment to cultural competence ensures that all individuals we serve, regardless of age, race, creed, sexual preference, gender identity, or socio-economic status, receive services that uphold equity and sensitivity to their diverse backgrounds.
                </p>
            </Container>
        </Container>

        <Container>
        <Row className="content-row">
            <Col lg="6" md="auto" className="d-flex align-items-center justify-content-center">
                <p>“University Psychological Center, Inc. – dba, Recovery Network’s vision is to promote change, growth, and wellness to individuals and families in the community.”
            ​   </p>
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

export default About;