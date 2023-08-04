import React, { useState, useEffect, ChangeEvent } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CityCard from "./CityCard/CityCard";

function App() {
  // Use States
  const [search, setSearch] = useState("");

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

  // Function for input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="App">
      <SearchBar handleInputChange={handleInputChange} />
      <CityCard />
    </div>
  );
}

export default App;
