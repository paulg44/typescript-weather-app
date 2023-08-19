// Component for bootstrap Navbar

import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/shoppinghome" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/shoppingstore" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/shoppingabout" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
