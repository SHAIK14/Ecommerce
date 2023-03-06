import { Container, Navbar, NavItem } from "react-bootstrap";

const Nav = (props) => {
  return (
    <>
      <Navbar bg="light" expand="sm" variant="dark" className="mt-3">
        <Container>
          <NavItem>Home</NavItem>
          <NavItem>Store</NavItem>
          <NavItem>About</NavItem>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
