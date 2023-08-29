// Component for searched city result
import { Container, Button } from "react-bootstrap";

type CityCardProps = {
  city: string;
  temp: number;
  conditionText: string;
  handleAddToList: () => void;
};

function CityCard({
  city,
  temp,
  conditionText,
  handleAddToList,
}: CityCardProps) {
  return (
    <Container className="mt-5">
      <h2 className="display-1">{city}</h2>
      <p className="display-6">{temp}C</p>
      <p>{conditionText}</p>
      <Button
        variant="outline-success"
        className="shadow"
        style={{ borderRadius: "20px", width: "200px" }}
        onClick={handleAddToList}
      >
        Add to List
      </Button>
    </Container>
  );
}

export default CityCard;
