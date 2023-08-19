import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import WeatherAppDisplay from "./WeatherApp/WeatherAppDisplay";
import HangmanAppDisplay from "./HangmanTestProject/HangmanAppDisplay";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/weather" element={<WeatherAppDisplay />}></Route>
        <Route path="/hangman" element={<HangmanAppDisplay />}></Route>
        <Route path="/shopping" element={<ShoppingCart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
