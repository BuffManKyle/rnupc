import {Container} from 'react-bootstrap';

function OutMental () {
    return (
    <>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Outpatient Mental Health Services</h1>
                <p>
                    Recovery Network is a behavioral health treatment center with a full compliment of onsite mental health and substance abuse servicesLicensed and certified psychiatrists, psychologists, clinical social workers, and professional counselors offer a broad range of clinical services to treat a full spectrum of psychiatric conditions and behavioral disorders. To schedule an intake or learn more information about our services, please call our office and we will assist you in addressing your needs.
                </p>
            </Container>
        </Container>

        <Container>
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
        </Container>
    </>
    )
};

export default OutMental;