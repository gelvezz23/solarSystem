/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlanetState } from "@/entities/PlanetStore";
import getPlanetData from "@/infrastructure/nasaApi/getPlanetData/getPlanetData";
import getPlanetsData from "@/infrastructure/nasaApi/getPlanetsData";
import { create } from "zustand";

const usePlanetStore = create<PlanetState>((set) => ({
  planets: [],
  loading: false,
  error: null,
  fetchPlanets: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getPlanetsData();
      set({ planets: data, loading: false });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch planets",
        loading: false,
      });
    }
  },
  fetchPlanetDetails: async (planetName: string) => {
    set({ loading: true, error: null });
    try {
      const data = await getPlanetData(planetName);
      set({ planets: data, loading: false });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch planets",
        loading: false,
      });
    }
  },
}));

export default usePlanetStore;
