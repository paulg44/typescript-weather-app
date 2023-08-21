// Component for Homepage
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Link to={"/weather"}>Weather App</Link>
      <Link to={"/hangman"}>Hangman</Link>
      <Link to={"/shopping"}>Shopping Cart</Link>
      <Link to={"/todo"}>Todo List</Link>
    </div>
  );
}

export default Homepage;
