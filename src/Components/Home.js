import Nav from "./Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
const Home = (props) => {
  return (
    <>
      <Nav />

      <Card style={{ width: "18rem" }} className="mt-3">
        <Container>
          <Card.Title>Colors</Card.Title>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
            />

            <span>
              {" "}
              <Card.Text>$12.99</Card.Text>
              <Button variant="primary">Add to cart </Button>
            </span>
          </Card.Body>
        </Container>
      </Card>
    </>
  );
};

export default Home;
