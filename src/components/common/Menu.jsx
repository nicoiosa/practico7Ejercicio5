import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";

const menu = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo Rolling Food"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink end to="/admin" className="nav-link">
              Admin
            </NavLink>
            <NavLink end to="/register" className="nav-link">
              Register
            </NavLink>
            <NavLink end to="/login" className="nav-link">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default menu;
