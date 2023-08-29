// Component for Searchbar

import { ChangeEvent } from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";

type SearchBarProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
};

function SearchBar({ handleInputChange, handleSearchClick }: SearchBarProps) {
  return (
    <Container className="mt-5">
      <InputGroup style={{ width: "400px" }}>
        <InputGroup.Text style={{ backgroundColor: "#333", color: "#fff" }}>
          Enter City
        </InputGroup.Text>
        <Form.Control onChange={handleInputChange} />
      </InputGroup>
      <Button
        className="mt-3 shadow"
        style={{ width: "150px", borderRadius: "20px" }}
        onClick={handleSearchClick}
      >
        Search
      </Button>
    </Container>
  );
}

export default SearchBar;
