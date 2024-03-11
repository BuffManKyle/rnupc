import {Container, Row, Col, Button} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import rainbow from './assets/images/rainbow-7350780_1280.jpg';
import { Link } from 'react-router-dom';

function Services () {
    return (
    <>
    <div className='background-img-props' style={{ backgroundImage: `url(${rainbow})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Services</h1>
                <p></p>
            </Container>
        </Container>

        <Container className='content-container'>
            <Row className='gy-3'>
            <Col lg={8} className='content-col'>
                <Row className=" justify-content-center">
                    <Col lg={6}>
                        <Button className='services-button' as={Link} to="/substance-abuse-counseling" >Outpatient Substance Abuse Counseling</Button>
                    </Col>
                    <Col lg={6}>
                        <Button className='services-button' as={Link} to="/residential-substance-abuse-treatment" >Residential Substance Abuse Treatment</Button>  
                    </Col>
                </Row>
                <Row className=" justify-content-center">
                    <Col lg={6}>
                        <Button className='services-button' as={Link} to="/mental-health-therapy" >Outpatient Mental Health Therapy</Button>
                    </Col>
                    <Col lg={6}>
                        <Button className='services-button' as={Link} to="/psychiatric-rehabilitation-program" >Psychiatric Rehabilitation Program</Button>  
                    </Col>
                </Row>
                <Row className=" justify-content-center">
                    <Col lg={6}>
                        <Button className='services-button' as={Link} to="/medication-managment" >Medication Management</Button>
                    </Col>
                </Row>
            </Col>
            <Col lg={4}>
                <Contactform/>
            </Col>
            </Row>
        </Container>
    </div>
    </>
    )
};

export default Services;