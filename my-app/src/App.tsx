import React, { useState, ChangeEvent } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CityCard from "./CityCard/CityCard";

// Next plan - add information to city card when a city searched and btn clicked. Add states for city info/data etc

function App() {
  // Use States
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [addFavourite, setAddFavourite] = useState("");

  // API for weather

  async function weatherAPI() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=7c5aa96ac3444385920101530232207&q=${search}`
    );
    const data = await response.json();
    console.log(data);
    setCity(data.location.name);
    setTemp(data.current.temp_c);
  }

  // Function for input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSearchClick = () => {
    return weatherAPI();
  };

  return (
    <div className="App">
      <SearchBar
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
      />
      <CityCard city={city} temp={temp} />
    </div>
  );
}

export default App;
