// Component for entering new todo
import { Container, Form, Button } from "react-bootstrap";
import { EnterNewTodoProps } from "./TodoDisplay";
// import { ChangeEvent, useState } from "react";

function EnterNewTodo({
  handleAddTodo,
  handleTodoInputDate,
  handleTodoInputChange,
  input,
  date,
}: EnterNewTodoProps) {
  return (
    <Container className=" d-flex align-items-center justify-content-center">
      <Form.Label>Enter new item</Form.Label>
      <Form.Control
        className="m-3"
        style={{ width: "400px" }}
        value={input}
        onChange={handleTodoInputChange}
        placeholder="Enter todo..."
      ></Form.Control>
      <Form.Label>Due By</Form.Label>
      <Form.Control
        className="m-3"
        style={{ width: "200px" }}
        value={date}
        onChange={handleTodoInputDate}
        placeholder="Enter Date..."
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
