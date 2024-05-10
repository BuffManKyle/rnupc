import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import Rnlogo from '../assets/images/RN_BehavioralHealth_Logo_FNL.png';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
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
    const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
        setScrolled(false);
      }
  };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownBlur = () => {
      setIsDropdownOpen(false);
    };


return (
<Navbar expand="lg" className={scrolled ? 'scrolled' : ''} sticky="top" >
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
            <NavDropdown title="Services" id="basic-nav-dropdown" 
              show={isDropdownOpen}
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownBlur}>
              <NavDropdown.Item as={Link} to="/substance-abuse-counseling" onClick={handleLinkClick}>Outpatient Substance Abuse Counseling</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mental-health-therapy" onClick={handleLinkClick}>Outpatient Mental Health Therapy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/residential-substance-abuse-treatment" onClick={handleLinkClick}>Residential Substance Abuse Treatment</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/medication-management" onClick={handleLinkClick}>Medication Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/psychiatric-rehabilitation-program" onClick={handleLinkClick}>Psychiatric Rehabilitation Program</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>Contact Us</Nav.Link>
            <div className="icon-container">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RecoveryNetworkMaryland"><FontAwesomeIcon className="icon" icon={faSquareFacebook} /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/recoverynetwork_upc?igshid=mg9qob42o1fw"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
             
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

// <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
export default Header;
