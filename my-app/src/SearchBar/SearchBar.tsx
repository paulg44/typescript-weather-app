// Component for Searchbar

import { ChangeEvent } from "react";

type SearchBarProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({ handleInputChange }: SearchBarProps) {
  return (
    <div>
      <label>Enter City</label>
      <input onChange={handleInputChange}></input>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
