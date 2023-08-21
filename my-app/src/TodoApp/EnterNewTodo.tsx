// Component for entering new todo
import { Container, Form, Button } from "react-bootstrap";

function EnterNewTodo() {
  return (
    <Container className=" d-flex align-items-center justify-content-center">
      <Form.Label>Enter new item</Form.Label>
      <Form.Control className="m-3" style={{ width: "400px" }}></Form.Control>
      <Form.Label>Due By</Form.Label>
      <Form.Control className="m-3" style={{ width: "200px" }}></Form.Control>

      <Button
        variant="outline-primary"
        className="shadow"
        style={{ borderRadius: "20px", width: "100px" }}
      >
        Add
      </Button>
    </Container>
  );
}

export default EnterNewTodo;
