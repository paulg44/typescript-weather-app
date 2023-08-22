// Component to for list items to render
import { ListGroup } from "react-bootstrap";

type TodoListProps = {
  input: string;
  date: string;
  addTodo: { input: string; date: string }[];
};

function TodoList({ addTodo }: TodoListProps) {
  return (
    <ListGroup>
      {addTodo.map((todo) => (
        <ListGroup.Item
          key={`${todo.input} due ${todo.date}`}
        >{`${todo.input} due ${todo.date}`}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
