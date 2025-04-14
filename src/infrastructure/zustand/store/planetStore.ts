/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlanetData } from "@/entities/Planets";
import { PlanetState } from "@/entities/PlanetStore";
import getPlanetData from "@/infrastructure/nasaApi/getPlanetData/getPlanetData";
import getPlanetsData from "@/infrastructure/nasaApi/getPlanetsData";
import { create } from "zustand";

const usePlanetStore = create<PlanetState>((set, get) => ({
  planets: [],
  allPlanets: [],
  loading: false,
  error: null,
  searchTerm: "",
  sortOrder: null,
  searchResults: [],
  currentPage: 1,
  planetsPerPage: 4,
  fetchPlanets: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getPlanetsData();
      set({
        planets: data.slice(0, get().planetsPerPage),
        allPlanets: data,
        loading: false,
      });
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
  setSearchTerm: (term) => set({ searchTerm: term }),
  searchPlanets: (term) => {
    set({ searchTerm: term });
    const allPlanets = get().allPlanets;
    const results = allPlanets.filter(
      (planet: PlanetData) =>
        planet.englishName.toLowerCase().includes(term.toLowerCase()) ||
        planet.name.toLowerCase().includes(term.toLowerCase()) ||
        planet.id.toLowerCase().includes(term.toLowerCase())
    );
    set({ searchResults: results });
  },
  sortPlanetsAlphabetically: () => {
    set((state) => {
      const currentSortOrder = state.sortOrder;
      const nextSortOrder = currentSortOrder === "asc" ? "desc" : "asc";

      const sortedResults = [...state.searchResults].sort((a, b) => {
        const comparison = a.englishName.localeCompare(b.englishName);
        return nextSortOrder === "asc" ? comparison : comparison * -1;
      });

      const sortedPlanets = [...state.planets].sort((a, b) => {
        const comparison = a.englishName.localeCompare(b.englishName);
        return nextSortOrder === "asc" ? comparison : comparison * -1;
      });

      const sortedAllPlanets = [...state.allPlanets].sort((a, b) => {
        const comparison = a.englishName.localeCompare(b.englishName);
        return nextSortOrder === "asc" ? comparison : comparison * -1;
      });
      console.log({
        searchResults: sortedResults,
        planets: sortedPlanets,
        allPlanets: sortedAllPlanets,
        sortOrder: nextSortOrder,
      });

      return {
        searchResults: sortedResults,
        planets: sortedPlanets,
        allPlanets: sortedAllPlanets,
        sortOrder: nextSortOrder,
      };
    });
  },

  setCurrentPage: (page) => {
    set({ currentPage: page });
    const startIndex = (page - 1) * get().planetsPerPage;
    const endIndex = startIndex + get().planetsPerPage;
    const currentPlanets = get().allPlanets.slice(startIndex, endIndex);
    set({ planets: currentPlanets });
  },
}));

export default usePlanetStore;
