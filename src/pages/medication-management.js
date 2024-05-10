import {Container, Row, Col} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import family from './assets/images/family-7257182_1280.jpg';

function Medmanagment () {
    return (
    <>
    <title>Recovery Network | Medication Managment</title>
    <div className='background-img-props' style={{ backgroundImage: `url(${family})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Medication Managment</h1>
                <p></p>
            </Container>
        </Container>

        <Container className='content-container'>
            <Row className='gy-3'>
            <Col lg={8} className='content-col'>
                <p>
                    The team at Recovery Network brings years of experience in the fields of substance abuse and mental health in order to provide communities throughout the State of Maryland with the expertise and compassion to navigate the steps needed to get lives back on track. If you or a loved one is in need of substance abuse or mental health counseling services — and if the prospect of seeking help seems intimidating — we’re here to help.
                </p>
                <p>
                    Since its inception Recovery Network has sought to strengthen communities through innovative, recovery-focused strategies and connect individuals seeking alcohol or drug abuse and addiction counseling services with the best treatment opportunities — in an effort to promote long-term recovery and sustained success.
                </p>
                <p>
                    Recovery Network offers Medication Management services during select hours at select locations. Please contact your local Recovery Network office to learn more about the organization’s medication management program and referral criteria.
                </p>
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