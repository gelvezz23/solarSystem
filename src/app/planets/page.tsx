"use client";
import { PlanetData } from "@/entities/Planets";
import usePlanetStore from "@/infrastructure/zustand/store/planetStore";
import Card from "@/presentation/components/Card";
import Loading from "@/presentation/components/Loading";
import { useEffect } from "react";

const PlanetsPage = () => {
  const { planets, loading, error, fetchPlanets } = usePlanetStore();

  useEffect(() => {
    if (planets.length === 0 && !loading && !error) {
      fetchPlanets();
    }
  }, [fetchPlanets, planets.length, loading, error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading planets: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-white-800 mb-6">
        Planets of the Solar System
      </h1>
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
    </div>
  );
};
export default PlanetsPage;
