import {Container, Form, FloatingLabel, Col, Row, Button} from 'react-bootstrap';

function Contact () {
    return (
    <>
        <Container fluid className='Jumbotron'>
            <Container>
                <h1>Contact Us</h1>
                <p></p>
            </Container>
        </Container>

        <Container>
            <Row>
            <Col lg={6}><h3>Reach out today</h3></Col>
            <Col lg={6}>
                <Form>
                    <Form.Group className="mb-3 contact-form">
                        <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="mb-3">
                            <Form.Control type="name" placeholder='Name'/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingEmail"
                            label="Email Address"
                            className="mb-3">
                            <Form.Control type="email" placeholder='Email Address'/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPhone"
                            label="Phone"
                            className="mb-3">
                            <Form.Control type="number" placeholder='Phone'/>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingMsg"
                            label="Message"
                            className="mb-3">
                            <Form.Control as="textarea" type="text" placeholder='Message'/>
                        </FloatingLabel>
                    </Form.Group>
                    <div className="d-grid gap-2">
                    <Button className='contact-button' size="lg" type="submit">Submit form</Button>
                    </div>
                </Form>
            </Col>
            </Row>
        </Container>
    </>
    )
};

export default Contact;