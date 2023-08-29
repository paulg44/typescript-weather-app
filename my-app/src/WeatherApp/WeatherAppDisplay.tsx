// Weather App display component
import { useState, ChangeEvent } from "react";
import { Container, Stack } from "react-bootstrap";
import CityCard from "./CityCard/CityCard";
import SearchBar from "./SearchBar/SearchBar";
import FavouriteCities from "./FavouriteCities/FavouriteCities";
import BackButton from "../BackButton/BackButton";

export type CityData = {
  name: string;
};

function WeatherAppDisplay() {
  // Use States
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [addFavourite, setAddFavourite] = useState<CityData[]>([]);

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
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  }

  // Functtion for search button
  function handleSearchClick() {
    return weatherAPI();
  }

  // Function for add to list button
  function handleAddToList() {
    const newFavourite: CityData = { name: city };
    setAddFavourite([...addFavourite, newFavourite]);
    console.log("add to list btn clicked");
  }
  return (
    <Container className="d-flex" style={{ height: "100vh" }}>
      <Container className="d-flex flex-column justify-content-center">
        <SearchBar
          handleInputChange={handleInputChange}
          handleSearchClick={handleSearchClick}
        />
        <CityCard city={city} temp={temp} handleAddToList={handleAddToList} />
      </Container>
      <FavouriteCities addFavourite={addFavourite} />
      <BackButton />
    </Container>
  );
}

export default WeatherAppDisplay;
