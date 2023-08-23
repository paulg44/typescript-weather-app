// Component for todo display
import { Container } from "react-bootstrap";
import { useState, ChangeEvent, MouseEvent } from "react";
import EnterNewTodo from "./EnterNewTodo";
import TodoList from "./TodoList";

export type EnterNewTodoProps = {
  handleTodoInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTodoInputDate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: (e: MouseEvent<HTMLButtonElement>) => void;
  input: string;
  date: string;
  addTodo: { input: string; date: string }[];
};

function TodoDisplay() {
  // States
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [addTodo, setAddTodo] = useState<EnterNewTodoProps["addTodo"]>([]);

  // Function for todo change
  function handleTodoInputChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  }

  //   Function for todo date
  function handleTodoInputDate(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setDate(e.target.value);
    console.log(date);
  }

  //   Function to add new todod to list
  function handleAddTodo() {
    const newTodo = { input, date };
    setAddTodo([newTodo, ...addTodo]);
    setInput("");
    setDate("");
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      {/* Make Paul's dynamic? */}
      <h1>Paul's Todo List</h1>
      <EnterNewTodo
        handleAddTodo={handleAddTodo}
        handleTodoInputChange={handleTodoInputChange}
        handleTodoInputDate={handleTodoInputDate}
        input={input}
        date={date}
        addTodo={addTodo}
      />
      <TodoList input={input} date={date} addTodo={addTodo} />
    </Container>
  );
}

export default TodoDisplay;
