import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  Link
} from "react-router-dom";

function Header() {

  return (
    <>
      <Navbar className='nav' expand="lg">
        <Container className="justify-content-between">
          <Navbar.Brand href="#" className='logo'>
            <Link to="/" className="text-white fs-2">Maxker</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#" className="text-white me-2"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#" className="text-white me-2"><Link to="/about">About Us</Link></Nav.Link>
              <NavDropdown title="Resume" className="text-white me-2" id="navbarScrollingDropdown">
                <NavDropdown.Item><Link to='/templates' className="text-black">Templates</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to='/personal' className="text-black">Build Now</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button className='btn1 me-2'><Link to="/login">Log in</Link></Button>
              <Button className='btn1 '><Link to="/signup">Sign Up</Link></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;