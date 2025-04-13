import { API_BASE_URL } from "@/config";

const getPlanetData = async (planetName: string) => {
  const apiUrl = `${API_BASE_URL}${planetName.toLowerCase()}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching planet data:", error);
    return null;
  }
};

export default getPlanetData;
