import { useContext } from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import CartContext from "./store/cart-context";
import ModalContext from "./store/modal-context";

const Header = (props) => {
  const { cartModalHandler, authModalHandler } = useContext(ModalContext);
  const { totalItems } = useContext(CartContext);
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
        <Button
          variant="info"
          className="d-flex align-items-center mr-3"
          size="lg"
          onClick={cartModalHandler}
        >
          Cart
          <Badge pill variant="light" className="ml-3 p-2">
            {totalItems}
          </Badge>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
