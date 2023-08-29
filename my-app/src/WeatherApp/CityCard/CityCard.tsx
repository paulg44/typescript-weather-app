// Component for searched city result
import { Container, Button } from "react-bootstrap";

type CityCardProps = {
  city: string;
  temp: number;
  handleAddToList: () => void;
};

function CityCard({ city, temp, handleAddToList }: CityCardProps) {
  return (
    <Container>
      <h2 className="display-1">{city}</h2>
      <p className="display-6">{temp}C</p>
      <Button variant="outline-success" onClick={handleAddToList}>
        Add to List
      </Button>
    </Container>
  );
}

export default CityCard;
