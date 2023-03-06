import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const Header = (props) => {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      className="position-fixed fixed-top"
    >
      <Navbar.Brand href="#home" className="mr-5">
        <h1 style={{ fontFamily: "serif" }} className="font-weight-bolder">
          My Generics
        </h1>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" defaultActiveKey="/home" className="mr-auto">
          <NavLink className="btn btn-primary mx-3" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-primary mx-3" to="/store">
            Store
          </NavLink>
          <NavLink className="btn btn-primary mx-3" to="/about">
            About
          </NavLink>
          <NavLink className="btn btn-primary mx-3" to="/contact">
            Contact Us
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
