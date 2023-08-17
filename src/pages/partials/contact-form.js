import {Form, FloatingLabel, Button} from 'react-bootstrap';

function Contactform () {
    return (
    <>
    <div className='contact-form'>
        <Form>
            <Form.Group className="mb-3 ">
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
    </div>
    </>
    )
};

export default Contactform;