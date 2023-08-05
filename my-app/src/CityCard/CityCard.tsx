// Component for searched city result

type CityCardProps = { city: string; temp: number };

function CityCard({ city, temp }: CityCardProps) {
  return (
    <div>
      <h2>{city}</h2>
      <p>{temp}</p>
    </div>
  );
}

export default CityCard;
