import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import Rnlogo from './images/RNlogo.png';
import Upclogo from './images/UPC-tree-v2.png';
import React from "react";
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
        <Container className="nav-brand-containter hide-on-desktop">
        <Navbar.Brand href="/">
            <img
            className="rn-logo"
             src={Upclogo} alt="University Psychological Center Logo"
            />
        </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
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
        <Container className="nav-brand-containter hide-on-mobile">
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