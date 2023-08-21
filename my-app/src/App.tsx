import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage/Homepage";
import WeatherAppDisplay from "./WeatherApp/WeatherAppDisplay";
import HangmanAppDisplay from "./HangmanTestProject/HangmanAppDisplay";
import ShoppingCartDisplay from "./ShoppingCart/ShoppingCartAppDisplay";
import TodoDisplay from "./TodoApp/TodoDisplay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/weather" element={<WeatherAppDisplay />}></Route>
        <Route path="/hangman" element={<HangmanAppDisplay />}></Route>
        <Route path="/shopping/*" element={<ShoppingCartDisplay />}></Route>
        <Route path="/todo/" element={<TodoDisplay />}></Route>
      </Routes>
    </>
  );
}

export default App;
