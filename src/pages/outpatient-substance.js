import {Container, Row, Col} from 'react-bootstrap';
import Contactform from './partials/contact-form';
import sunset from './assets/images/wedding-7335258_1280.jpg';

function OutSubstance () {
    return (
    <>
    <div className='background-img-props' style={{ backgroundImage: `url(${sunset})` }}>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Outpatient Substance Abuse Counseling</h1>
                <p>
                    Recovery Network provides an array of comprehensive care options encompassing five distinct levels of treatment: Outpatient (Level I.1), Intensive Outpatient (Level II.1), Residential services at ASAM Intensity Levels III.1 and III.3, Transitional/Supportive Housing, and a certified DUI/DWI program. Our extensive facility boasts over 100 halfway house beds, catering to the needs of individuals requiring both short-term and extended care. Our offerings extend to diverse populations, including males, females, women with children, and those who identify as transgender. Driven by clinical considerations, Recovery Network presents a spectrum of twenty-five core program services to cater to a range of therapeutic needs.
                </p>
            </Container>
        </Container>
        <Container className='content-container'>
        <Row>
            <Col lg={8}>
            <h2>Traditional Outpatient (Level I.1)</h2>
            <p>
                Traditional outpatient counseling is provided in the form of individual, group, or a mixture of these service types to assist individuals in meeting their own recovery goals. This level of care is designed for individuals in early recovery who need additional support, education, and treatment, but do not need the structured support provided in an intensive outpatient program.
            </p>
            <h2>Intensive Outpatient (Level II.1)</h2>
            <p>
                Intensive Outpatient treatment is identified as between 9 and 12 hours of intensive outpatient treatment consisting of primarily group and individual counseling. Patients are expected to attend group three to four times per week in a structured treatment setting. This level of care is provided to those who may be at higher risk for relapse and need more support and structure than can be provided in traditional outpatient treatment.
            </p>
            <h2>Aftercare Services</h2>
            <p>
                Aftercare treatment is provided to those individuals who have completed inpatient or IOP treatment. The focus of this program is on continuing relapse prevention and maintaining positive coping skills. Individual and group therapy are primary treatment modalities. Patients typically attend group therapy 1x/week, although this could vary depending on patient needs and the recommendations of counselor.
            </p>
            <h2>Medication Assisted Treatment</h2>
            <p>
                Recovery Network’s buprenorphine program can be offered to individuals with a history of opiate dependence and are unable to maintain sobriety with traditional counseling services. All individuals who participate in the suboxone/buprenorphine must also be enrolled and compliant in the Level I.I, II.I, III.I, or III.3 programs listed above.
            </p>
            <h2>DUI Program/Forensic Services</h2>
            <ul>
                <li>Court Approved DUI and DWI Programs</li>
                <li>12-Week Social Drinker Program</li>
                <li>26 Week Problem Drinker Program</li>
                <li>Expert Witness and Testimony</li>
                <li>Urinalysis Monitoring</li>
                <li>Liaison Consultation to Probation Offices</li>
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

export default OutSubstance;