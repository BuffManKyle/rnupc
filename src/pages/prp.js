import {Container, Row, Col} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import beach from './assets/images/couple-7231599_1280.jpg';

function Prp () {
    return (
    <>
     <div className='background-img-props' style={{ backgroundImage: `url(${beach})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Psychiatric Rehabilitation Program</h1>
                <p>
                    The Psychiatric Rehabilitation Program (PRP) is a program designed to assist participants in the development or enhancement of independent living skills.  The ultimate goals is to optimize individual's function in social environments associated with living, learning and working; and prevent relapse or hospitalizations.  Services are delivered in University Psychological Center's (UPC) facilities and other places in the community.
                </p>
            </Container>
        </Container>

        <Container className='content-container'>
        <Row className='gy-3'>
            <Col lg={8} className='content-col'>
            <p>
                Recovery Network's Psychiatric Rehabilitation Program provides one-to-one, group skill trainings and community based services that promote the use of resources as well as self-help organizations to adults with psychiatric disabilities.  Services are highly individualized and directed by the participant's choice in collaboration with the rehabilitation staff and family members, when appropriate.  The development or enhancement of independent living skills is facilitated by an array of skill building interventions supportive of successful, independent community living.
            </p>
            <ul>
                <li>Succeed in his/her home through acquiring skills in nutrition, budgeting, self-care, use of public transportation and other activities.</li>
                <li>Improve his/her time management.</li>
                <li>Acquire and maintain employment.</li>
                <li>Connect with and utilize resources such as employment specialists, program's groups, advocacy groups, self-help or other community support.</li>
                <li>Enjoy healthy social relationships with family, friends, coworkers and other community members.</li>
                <li>Receive support in the coordination of care between service providers and natural supports.</li>
                <li>Improve somatic wellness and understanding regarding medical conditions through health and wellness promotion activities.</li>
                <li>Learn about volunteerism and other self-enriching possibilities in the community.</li>
            </ul>
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

export default Prp;