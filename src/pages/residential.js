import {Container, Row, Col} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import man from './assets/images/man-7239061_1280.jpg';

function Residential () {
    return (
    <>
     <div className='background-img-props' style={{ backgroundImage: `url(${man})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Residential Substance Abuse Treatment</h1>
                <p></p>
            </Container>
        </Container>

        <Container className='content-container' >
            <Row className='gy-3'>
            <Col lg={8} className='content-col'>
                
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

export default Residential;