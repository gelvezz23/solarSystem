import { PlanetData } from "./Planets";

export interface PlanetState {
  planets: PlanetData[];
  loading: boolean;
  error: string | null;
  fetchPlanets: () => Promise<void>;
  fetchPlanetDetails: (value: string) => Promise<void>;
}
