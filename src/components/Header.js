import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shin Ju Hyun</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Me</Nav.Link>
            <NavDropdown title="Skills" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">HTML & CSS</NavDropdown.Item>
              <NavDropdown.Item href="#action4">PhP</NavDropdown.Item>
              <NavDropdown.Item href="#action5">dks</NavDropdown.Item>
              <NavDropdown.Item href="#action6">sud</NavDropdown.Item>
              <NavDropdown.Divider /> </NavDropdown>
              <NavDropdown title="Project" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action7">Pawfectwave</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;