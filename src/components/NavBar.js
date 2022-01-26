import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light" className="sticky-top">
      <img
        alt=""
        src="/logo.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        />
      <Navbar.Brand href="/">
        {' '}
        Tennis Club
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Registration</Nav.Link>
        <Nav.Link as={Link} to="welcome">Welcome</Nav.Link>
      </Nav>
  </Navbar>
  )
}