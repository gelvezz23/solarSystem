import { FC } from "react";

const PlanetInfo: FC<{ planet: { name: string; details: string } }> = ({
  planet,
}) => {
  if (!planet) {
    return null;
  }
  return (
    <div className="planet-info absolute top-4 left-4 bg-gray-800 bg-opacity-75 text-white p-4 rounded">
      <h3>{planet.name}</h3>
      {planet.details && <p>{planet.details}</p>}
    </div>
  );
};

export default PlanetInfo;
