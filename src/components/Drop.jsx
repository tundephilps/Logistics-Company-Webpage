import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaTruck } from "react-icons/fa";

function Drop() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="mobilenav">
      <Container>
        <Navbar.Brand href="#home">
          <a href="" class="navbar-brand ml-lg-3">
            <h1 class="m-0 display-5 text-uppercase text-primary">
              <i class="fa fa-truck mr-2">
                <FaTruck />
              </i>
              Faster
            </h1>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>

            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Drop;
