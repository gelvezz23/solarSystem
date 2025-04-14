import { PlanetData } from "@/entities/Planets";
import Card from "../Card";
import { FC } from "react";

const Results: FC<{ searchResults: PlanetData[] }> = ({ searchResults }) => {
  return (
    <>
      {searchResults.length > 0 && <h5>Resultados : </h5>}
      {searchResults.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-12 rounded-lg shadow-lg shadow-indigo-500/50 mb-4">
          {searchResults.map((planet: PlanetData) => (
            <li
              key={planet.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
            >
              <Card planet={planet} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-12 rounded-lg shadow-lg shadow-indigo-500/50 mb-4">
          <p>Planeta no encontrado.</p>
        </div>
      )}
    </>
  );
};

export default Results;
