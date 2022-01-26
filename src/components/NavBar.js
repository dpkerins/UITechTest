import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/racket-and-ball-tennis-logo-designs-inspiration-vector-22316025.jpeg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          />{' '}
          Tennis Club
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Registration</Nav.Link>
        <Nav.Link href="welcome">Welcome</Nav.Link>
      </Nav>
  </Navbar>
  )
}