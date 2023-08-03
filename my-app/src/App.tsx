import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import CityCard from "./CityCard/CityCard";

function App() {
  // API for weather
  useEffect(() => {
    async function weatherAPI() {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=7c5aa96ac3444385920101530232207&q=derby"
      );
      const data = await response.json();
      console.log(data);
    }
    weatherAPI();
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <CityCard />
    </div>
  );
}

export default App;
