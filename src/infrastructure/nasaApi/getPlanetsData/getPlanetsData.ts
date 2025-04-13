import { API_BASE_URL } from "@/config";

const getPlanetsData = async () => {
  const apiUrl = `${API_BASE_URL}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.bodies.filter(
      (body: { isPlanet: boolean; englishName: string }) =>
        body.isPlanet || body.englishName === "Pluto"
    );
  } catch (error) {
    console.error("Error fetching planets data:", error);
    return [];
  }
};

export default getPlanetsData;
