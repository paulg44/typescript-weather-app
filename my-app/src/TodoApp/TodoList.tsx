// Component to for list items to render
import { ListGroup } from "react-bootstrap";

function TodoList() {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>Item 1</ListGroup.Item>
        <ListGroup.Item>Item 2</ListGroup.Item>
        <ListGroup.Item>Item 3</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default TodoList;
