import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage/Homepage";
import WeatherAppDisplay from "./WeatherApp/WeatherAppDisplay";
import HangmanAppDisplay from "./HangmanTestProject/HangmanAppDisplay";
import ShoppingCartDisplay from "./ShoppingCart/ShoppingCartAppDisplay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/weather" element={<WeatherAppDisplay />}></Route>
        <Route path="/hangman" element={<HangmanAppDisplay />}></Route>
        <Route path="/shopping/*" element={<ShoppingCartDisplay />}></Route>
      </Routes>
    </>
  );
}

export default App;
