import React from "react";

// Styles
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const AppNavbar = () => {
  return(
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="navbar"
            activeKey="/"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/" className="each-item border-dark">Item 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#" className="each-item">Item 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#" className="each-item">Item 3</Nav.Link>
            </Nav.Item>
            <Nav.Item className="last-item">
              <Button variant ="primary" className="login-button">Login</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default AppNavbar;