// Component for Searchbar

import { ChangeEvent } from "react";

type SearchBarProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
};

function SearchBar({ handleInputChange, handleSearchClick }: SearchBarProps) {
  return (
    <div>
      <label>Enter City</label>
      <input onChange={handleInputChange}></input>
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;
