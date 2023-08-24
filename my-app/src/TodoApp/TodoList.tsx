// Component to for list items to render
import { ListGroup, Button } from "react-bootstrap";
import { MouseEvent } from "react";

type TodoListProps = {
  handleDeleteTodo: (index: number) => void;
  input: string;
  date: string;
  addTodo: { input: string; date: string }[];
};

function TodoList({ addTodo, handleDeleteTodo }: TodoListProps) {
  return (
    <ListGroup>
      {addTodo.map((todo, index) => (
        <ListGroup.Item
          className="d-flex justify-content-between"
          style={{ width: "400px" }}
          key={`${todo.input} ${todo.date}`}
        >
          {todo.input}
          <span className="text-muted">due {todo.date}</span>
          <Button variant="danger" onClick={() => handleDeleteTodo(index)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
