import {Container, Col, Row} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import sunset from './assets/images/sunset-8113697_1280.jpg';

function Contact () {
    return (
    <>
    <title>Recovery Network | Contact</title>
        <div className='background-img-props' style={{ backgroundImage: `url(${sunset})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Contact Us</h1>
                <p></p>
            </Container>
        </Container>
            
        <Container>
            <Row className='content-container'>
            <Col lg={6} className='content-col'>
                <h2>Reach out today</h2>
                <h4>
                    21 W. 25th Street
                    Baltimore, MD 21218
                </h4>
                <h4>
                    Phone: (410) 366-1717
                </h4>
            </Col>
            <Col lg={6}>
                <Contactform/>
            </Col>
            </Row>
        </Container>
        </div>
    </>
    )
};

export default Contact;