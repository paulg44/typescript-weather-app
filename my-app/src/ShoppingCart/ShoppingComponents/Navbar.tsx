// Component for bootstrap Navbar

import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/shopping/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/shopping/store/" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/shopping/about/" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
