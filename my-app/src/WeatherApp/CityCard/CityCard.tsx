// Component for searched city result
import { Container, Button } from "react-bootstrap";

type CityCardProps = {
  city: string;
  country: string;
  temp: number;
  weatherIcon: string;
  conditionText: string;
  handleAddToList: () => void;
};

function CityCard({
  city,
  country,
  temp,
  weatherIcon,
  conditionText,
  handleAddToList,
}: CityCardProps) {
  return (
    <Container className="mt-5">
      <h2 className="display-3">
        {city} {country}
      </h2>
      <p className="display-6">{temp}C</p>
      <img src={weatherIcon} alt="" />
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
