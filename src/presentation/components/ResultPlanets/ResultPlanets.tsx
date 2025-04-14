import { PlanetData } from "@/entities/Planets";
import React, { FC } from "react";
import Card from "../Card";

const ResultPlanets: FC<{ planets: PlanetData[] }> = ({ planets }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {planets.map((planet: PlanetData) => (
        <li
          key={planet.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
        >
          <Card planet={planet} />
        </li>
      ))}
    </ul>
  );
};

export default ResultPlanets;
