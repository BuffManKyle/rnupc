import {Container, Row, Col} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import rainbow from './assets/images/rainbow-7350780_1280.jpg';

function Anger () {
    return (
    <>
    <div className='background-img-props' style={{ backgroundImage: `url(${rainbow})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Outpatient Anger Management</h1>
                <p></p>
            </Container>
        </Container>

        <Container className='content-container'>
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

export default Anger;