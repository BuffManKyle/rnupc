import {Container, Row, Col} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import man from './assets/images/man-7239061_1280.jpg';

function Residential () {
    return (
    <>
    <title>Recovery Network | Residential Substance Abuse Treatment</title>
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
                <h2>Residential Substance Use Disorder Treatment</h2>
                <p>
                    Recovery Network is State-licensed and CARF-accredited to provide Residential Substance Use Disorder Treatment.  All of our residential facilities have obtained the required Certificate of Occupancy and Fire Marshal Inspection from the local jurisdiction to provide these services prior to becoming accredited and State-licensed.  
                </p>
                <p>
                    When a patient meets the American Society of Addiction Medicine (ASAM) criteria for Residential Substance Use Disorder Treatment, it is important to ensure that they are finding a provider who is appropriately licensed to provide the residential level of care.  One of the largest problems facing our behavioral health system today is the presence of Partial Hospitalization Programs (PHP) posing as State-licensed Residential Substance Use Disorder Treatment providers by providing free, or reduced cost, housing in conjunction with and tied to their PHP program, which by definition should be an outpatient only program.  These houses are not licensed, certified, or regulated in any way.  This illegal treatment model can be very unsafe for patients, and is commonly referred to as “PHP with a Pillow”.  If you find a provider operating this sort of program, we encourage you to report this sort of activity to the Maryland Behavioral Health Administration here. 
                </p>
                <h2>Residential – Low Intensity Level 3.1 Program</h2>
                <p>
                    Level 3.1 is clinically managed low-intensity residential treatment. Residential services at this level consist of a setting, such as a group home, where people live. However, treatment is only required to be a minimum of 5 hours per week, which helps people with such topics as relapse management.  24-hour structure with available trained personnel. Typical length of stay 90-180 days.
                </p>
                <h2>Residential – High Intensity Level 3.5 Program</h2>
                <p>
                   Level 3.5 is clinically managed residential services, sometimes referred to as “inpatient”. These services are designed for people with serious psychological or social issues who need 24-hour oversight and are at risk of imminent harm. 24-hour care with trained counselors to stabilize imminent danger and prepare for outpatient. Able to tolerate and use full active milieu or therapeutic community. Typical length of stay 30-90 days. 
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

export default Residential;