import { PlanetData } from "./Planets";

export interface PlanetState {
  planets: PlanetData[];
  allPlanets: PlanetData[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  sortOrder: "asc" | "desc" | null;
  searchResults: PlanetData[];
  planetsPerPage: number;
  currentPage: number;
  fetchPlanets: () => Promise<void>;
  fetchPlanetDetails: (value: string) => Promise<void>;
  setSearchTerm: (term: string) => void;
  searchPlanets: (term: string) => void;
  sortPlanetsAlphabetically: () => void;
  setCurrentPage: (page: number) => void;
}
