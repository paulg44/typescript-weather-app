// Component for Homepage
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

function Homepage() {
  return (
    <Container
      className="d-flex  align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Card>
        <Card.Title>Weather App</Card.Title>
        <Link to={"/weather"}>Link</Link>
      </Card>
      <Card>
        <Card.Title>Hangman</Card.Title>
        <Link to={"/hangman"}>Link</Link>
      </Card>
      <Card>
        <Card.Title>Shopping Cart</Card.Title>
        <Link to={"/shopping"}>Link</Link>
      </Card>
      <Card>
        <Card.Title>Todo App</Card.Title>
        <Link to={"/todo"}>Link</Link>
      </Card>
    </Container>
  );
}

export default Homepage;
