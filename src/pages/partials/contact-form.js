import {Form, FloatingLabel, Button} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

function Contactform () {
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, "qBl7jlxZyYXRW4HE2")
                .then((result) => {
                    console.log(result.text);
                    e.target.reset();
                    toast.success("Message Sent!");
                })
                .catch((error) => {
                    console.log(error.text);
                    toast.error("An error occurred while sending the message. Please try again later.");
                });
        };
    }
      function onChange(value) {
        console.log("Captcha value:", value);
        setIsCaptchaVerified(true);
      }
    return (
    <>
    <div className='contact-form'>
        <h2>Contact Us Today</h2>
        <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3 ">
                <FloatingLabel
                    controlId="floatingName"
                    label="Name*"
                    className="mb-3">
                    <Form.Control type="name" placeholder='Name' name='from_name' required/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingEmail"
                    label="Email Address*"
                    className="mb-3">
                    <Form.Control type="email" placeholder='Email Address' name='from_email' required/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingPhone"
                    label="Phone"
                    className="mb-3">
                    <Form.Control type="number" placeholder='Phone' name='from_phone'/>
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingMsg"
                    label="Message*"
                    className="mb-3">
                    <Form.Control as="textarea" type="text" placeholder='Message' name='message' required/>
                </FloatingLabel>
            </Form.Group>
            <div className='captcha-css d-flex justify-content-center'>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={onChange}
            />
            </div>
            <div className="d-grid gap-2">
                <Button className='contact-button' size="lg" type="submit" value="send" disabled={!isCaptchaVerified}>Submit form</Button>
            </div>
        </Form>
        <ToastContainer/>
    </div>
    </>
    )
};

export default Contactform;