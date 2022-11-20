import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigations = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Physionic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
            <Nav.Link href="http://localhost:3000/services">Services</Nav.Link>
            <Nav.Link href="http://localhost:3000/contact">Contact</Nav.Link>
            <Nav.Link href="http://localhost:3000/pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

