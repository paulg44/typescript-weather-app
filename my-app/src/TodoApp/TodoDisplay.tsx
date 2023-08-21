// Component for todo display
import { Container } from "react-bootstrap";
import EnterNewTodo from "./EnterNewTodo";
import TodoList from "./TodoList";

function TodoDisplay() {
  return (
    <Container className="d-flex flex-column align-items-center">
      {/* Make Paul's dynamic? */}
      <h1>Paul's Todo List</h1>
      <EnterNewTodo />
      <TodoList />
    </Container>
  );
}

export default TodoDisplay;
