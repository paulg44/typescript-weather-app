import React from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import CityCard from "./CityCard/CityCard";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <CityCard />
    </div>
  );
}

export default App;
