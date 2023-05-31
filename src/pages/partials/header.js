import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import Rnlogo from './images/RNlogo.png';
import Upclogo from './images/UPCLogo.webp';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header () {

return (
    <>
<Navbar expand="lg" >
      <Container>
        <Container className="nav-brand-containter">
        <Navbar.Brand href="/">
            <img
            className="rn-logo"
             src={Rnlogo} alt="Recovery Network Logo"
            />
        </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Admissions</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Container className="nav-brand-containter">
        <Navbar.Brand href="/">
            <img
            className="rn-logo"
             src={Upclogo} alt="University Psychological Center Logo"
            />
        </Navbar.Brand>
        </Container>
      </Container>
    </Navbar>
</>
    );
}

export default Header;