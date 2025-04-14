"use client";

import usePlanetStore from "@/infrastructure/zustand/store/planetStore";

import Loading from "@/presentation/components/Loading";
import RenderPages from "@/presentation/components/RenderPages";
import ResultPlanets from "@/presentation/components/ResultPlanets";
import PlanetSearch from "@/presentation/components/Search";
import { useEffect } from "react";

const PlanetsPage = () => {
  const { planets, loading, error, fetchPlanets } = usePlanetStore();

  useEffect(() => {
    if (planets.length === 0 && !loading && !error) {
      fetchPlanets();
    }
  }, [error, fetchPlanets, loading, planets]);

  if (error) {
    return <div>Error loading planets: {error}</div>;
  }

  return (
    <div className="container mx-auto py-22">
      <h1 className="text-3xl font-bold text-center text-white-800 mb-6">
        Planets of the Solar System
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PlanetSearch /> <ResultPlanets planets={planets} />
          <div className="mt-4 flex justify-center">
            <RenderPages />
          </div>
        </>
      )}
    </div>
  );
};
export default PlanetsPage;
