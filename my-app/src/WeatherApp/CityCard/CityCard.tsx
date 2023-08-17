// Component for searched city result

type CityCardProps = {
  city: string;
  temp: number;
  handleAddToList: () => void;
};

function CityCard({ city, temp, handleAddToList }: CityCardProps) {
  return (
    <div>
      <h2>{city}</h2>
      <p>{temp}</p>
      <button onClick={handleAddToList}>Add to List</button>
    </div>
  );
}

export default CityCard;
