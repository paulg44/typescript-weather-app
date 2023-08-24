// Component for Homepage
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Stack, Card } from "react-bootstrap";
import "./Homepage.css";

function Homepage() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <Container
      className="customHomepage d-flex flex-column  align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      {/* Have scrambled text revealing headings */}
      <h1 className="mb-5 d-flex flex-column" style={{ fontSize: "3.5rem" }}>
        Typescript Projects
        <span className="text-info" style={{ fontSize: "2.5rem" }}>
          Styling with Bootstrap
        </span>
        <span className="text-muted " style={{ fontSize: "2rem" }}>
          Testing with Cypress
        </span>
      </h1>
      <Stack
        direction="horizontal"
        gap={3}
        className="d-flex align-items-center justify-content-center"
      >
        <Card className="customCard">
          <Card.Title>Weather App</Card.Title>
          <Card.Body>Some Text</Card.Body>
          <Link className="link" to={"/weather"}>
            Link
          </Link>
        </Card>
        <Card className="customCard">
          <Card.Title>Hangman</Card.Title>
          <Card.Body>Some Text</Card.Body>
          <Link className="link" to={"/hangman"}>
            Link
          </Link>
        </Card>
        <Card className="customCard">
          <Card.Title>Shopping Cart</Card.Title>
          <Card.Body>Some Text</Card.Body>
          <Link className="link" to={"/shopping"}>
            Link
          </Link>
        </Card>
        <Card className="customCard">
          <Card.Title>Todo App</Card.Title>
          <Card.Body>Some Text</Card.Body>
          <Link className="link" to={"/todo"}>
            Link
          </Link>
        </Card>
      </Stack>
    </Container>
  );
}

export default Homepage;
