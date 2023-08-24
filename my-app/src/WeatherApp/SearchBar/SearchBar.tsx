// Component for Searchbar

import { ChangeEvent } from "react";
import { Form, Button } from "react-bootstrap";

type SearchBarProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
};

function SearchBar({ handleInputChange, handleSearchClick }: SearchBarProps) {
  return (
    <Form className="d-flex flex-column align-items-center mt-5">
      <Form.Label>Enter City</Form.Label>
      <Form.Control
        style={{ width: "400px", borderRadius: "20px" }}
        onChange={handleInputChange}
      ></Form.Control>
      <Button
        className="mt-3"
        style={{ width: "150px", borderRadius: "20px" }}
        onClick={handleSearchClick}
      >
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
