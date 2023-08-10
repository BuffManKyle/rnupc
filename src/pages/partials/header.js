import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import Rnlogo from './images/RN_BehavioralHealth_Logo_FNL.png';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faSquareFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function Header () {

return (
    <>
<Navbar expand="lg" className="sticky-top">
      <Container className="justify-content-evenly">
      <Container className="nav-brand-containter">
        <Navbar.Brand href="/">
            <img
            className="rn-logo"
             src={Rnlogo} alt="Recovery Network Logo"
            />
        </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Outpatient Substance Abuse</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Residential Programs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Outpatient Mental Health</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Psychiatric Rehabilitation (PRP)</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
              <FontAwesomeIcon className="icon" icon={faXTwitter} />
              <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
    );
}

export default Header;