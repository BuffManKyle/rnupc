import {Container, Row, Col} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import family from './assets/images/family-7257182_1280.jpg';

function Medmanagment () {
    return (
    <>
    <div className='background-img-props' style={{ backgroundImage: `url(${family})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Medication Managment</h1>
                <p></p>
            </Container>
        </Container>

        <Container>
            <Row className='content-container'>
            <Col lg={8} className=''>
                
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

export default Medmanagment;