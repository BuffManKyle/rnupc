import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import Rnlogo from '../assets/images/RN_BehavioralHealth_Logo_FNL.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faSquareFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';



function Header () {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };


return (
<Navbar expand="lg" className="sticky-top" >
      <Container className="">
      <div className="nav-brand-containter">
        <Navbar.Brand href="/">
            <img
            className="rn-logo"
             src={Rnlogo} alt="Recovery Network Logo"
            />
        </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
        <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
          <Nav className="m-auto" >
            <Nav.Link href="/" onClick={handleLinkClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" onClick={handleLinkClick}>About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/substance-abuse-counseling" onClick={handleLinkClick}>Outpatient Substance Abuse</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/residential" onClick={handleLinkClick}>Residential Programs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mental-health-therapy" onClick={handleLinkClick}>Outpatient Mental Health</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/psychiatric-rehabilitation-program" onClick={handleLinkClick}>Psychiatric Rehabilitation (PRP)</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>Contact Us</Nav.Link>
            <div className="icon-container">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><FontAwesomeIcon className="icon" icon={faSquareFacebook} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FontAwesomeIcon className="icon" icon={faXTwitter} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header;