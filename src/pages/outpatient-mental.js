import {Container, Row, Col} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import lake from './assets/images/lake-7340473_1280.jpg';

function OutMental () {
    return (
    <>
    <div className='background-img-props' style={{ backgroundImage: `url(${lake})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Outpatient Mental Health Services</h1>
                <p>
                    Recovery Network is a behavioral health treatment center with a full compliment of onsite mental health and substance abuse servicesLicensed and certified psychiatrists, psychologists, clinical social workers, and professional counselors offer a broad range of clinical services to treat a full spectrum of psychiatric conditions and behavioral disorders. To schedule an intake or learn more information about our services, please call our office and we will assist you in addressing your needs.
                </p>
            </Container>
        </Container>

        <Container>
            
            <Row className='content-container'>
                <Col lg={8} sm={12} className='content-col'>
                    <ul>
                        <li>Psychiatric Evaluation</li>
                        <li>Psychological Testing</li>
                        <li>Psychoanalysis</li>
                        <li>Therapy for individuals, couples, groups and families</li>
                        <li>Addiction Services</li>
                        <li>Psychotropic Medication</li>
                        <li>Evidence-Based Neurofeedback Therapy</li>
                        <li>Forensic Evaluation & Testimony</li>
                        <li>Stress Management & Hypnosis</li>
                        <li>Psychiatric Rehabilitation Program (PRP)</li>
                    </ul>
                </Col>
                <Col lg={4} sm={12}>
                    <Contactform/>
                </Col>
            </Row>
        </Container>
    </div>
    </>
    )
};

export default OutMental;