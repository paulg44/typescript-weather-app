// Component to for list items to render
// import { ListGroup } from "react-bootstrap";

type TodoListProps = {
  input: string;
  date: string;
  addTodo: { input: string; date: string }[];
};

function TodoList({ addTodo }: TodoListProps) {
  return (
    <div>
      {/* <ListGroup>
        <ListGroup.Item>Item 1</ListGroup.Item>
        <ListGroup.Item>Item 2</ListGroup.Item>
        <ListGroup.Item>Item 3</ListGroup.Item>
      </ListGroup> */}
      <ul>
        {addTodo.map((todo) => (
          <li
            key={`${todo.input} due ${todo.date}`}
          >{`${todo.input} due ${todo.date}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
