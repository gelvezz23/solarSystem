import getPlanetData from "@/infrastructure/nasaApi/getPlanetData/getPlanetData";
import Loading from "@/presentation/components/Loading";
import PlanetsDetails from "@/presentation/screens/PlanetsDetails";

const PlanetDetails = async ({
  params,
}: {
  params: { planetName: string };
}) => {
  const { planetName } = params;

  const planetData = await getPlanetData(planetName);
  if (!planetData) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col items-center">
      <PlanetsDetails planetData={planetData} />
    </section>
  );
};

export default PlanetDetails;
