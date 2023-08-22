// Component for entering new todo
import { Container, Form, Button } from "react-bootstrap";
import { EnterNewTodoProps } from "./TodoDisplay";
// import { ChangeEvent, useState } from "react";

function EnterNewTodo({
  handleAddTodo,
  handleTodoInputDate,
  handleTodoInputChange,
}: EnterNewTodoProps) {
  return (
    <Container className=" d-flex align-items-center justify-content-center">
      <Form.Label>Enter new item</Form.Label>
      <Form.Control
        className="m-3"
        style={{ width: "400px" }}
        onChange={handleTodoInputChange}
      ></Form.Control>
      <Form.Label>Due By</Form.Label>
      <Form.Control
        className="m-3"
        style={{ width: "200px" }}
        onChange={handleTodoInputDate}
      ></Form.Control>

      <Button
        variant="outline-primary"
        className="shadow"
        style={{ borderRadius: "20px", width: "100px" }}
        onClick={handleAddTodo}
      >
        Add
      </Button>
    </Container>
  );
}

export default EnterNewTodo;
