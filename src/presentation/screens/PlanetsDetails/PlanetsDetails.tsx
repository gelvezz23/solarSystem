import { PlanetData } from "@/entities/Planets";
import Image from "next/image";
import { FC } from "react";

const PlanetsDetails: FC<{ planetData: PlanetData }> = ({ planetData }) => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md overflow-hidden">
        <Image
          src={`/api/images/${planetData.englishName.toLowerCase()}.jpg`}
          alt={planetData.englishName}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-opacity duration-300 hover:opacity-90"
        />
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {planetData.englishName}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700">
              Name: <span className="font-semibold">{planetData.name}</span>
            </p>
            <p className="text-gray-700">
              ID: <span className="font-semibold">{planetData.id}</span>
            </p>
            <p className="text-gray-700">
              Is Planet:{" "}
              <span className="font-semibold">
                {planetData.isPlanet ? "Yes" : "No"}
              </span>
            </p>
            {planetData.moons && planetData.moons.length > 0 ? (
              <p className="text-gray-700">
                Moons:{" "}
                <span className="font-semibold">
                  {planetData.moons.map((moon) => moon.moon).join(", ")}
                </span>
              </p>
            ) : (
              <p className="text-gray-700">
                Moons: <span className="font-semibold">No moons listed</span>
              </p>
            )}
            <p className="text-gray-700">
              Semimajor Axis:{" "}
              <span className="font-semibold">
                {planetData.semimajorAxis} km
              </span>
            </p>
            <p className="text-gray-700">
              Perihelion:{" "}
              <span className="font-semibold">{planetData.perihelion} km</span>
            </p>
            <p className="text-gray-700">
              Aphelion:{" "}
              <span className="font-semibold">{planetData.aphelion} km</span>
            </p>
            <p className="text-gray-700">
              Eccentricity:{" "}
              <span className="font-semibold">{planetData.eccentricity}</span>
            </p>
            <p className="text-gray-700">
              Inclination:{" "}
              <span className="font-semibold">
                {planetData.inclination} degrees
              </span>
            </p>
            {planetData.mass && (
              <p className="text-gray-700">
                Mass:{" "}
                <span className="font-semibold">
                  {planetData.mass.massValue} x 10^
                  {planetData.mass.massExponent} kg
                </span>
              </p>
            )}
            {planetData.vol && (
              <p className="text-gray-700">
                Volume:{" "}
                <span className="font-semibold">
                  {planetData.vol.volValue} x 10^{planetData.vol.volExponent}{" "}
                  km³
                </span>
              </p>
            )}
          </div>
          <div>
            <p className="text-gray-700">
              Density:{" "}
              <span className="font-semibold">{planetData.density} g/cm³</span>
            </p>
            <p className="text-gray-700">
              Gravity:{" "}
              <span className="font-semibold">{planetData.gravity} m/s²</span>
            </p>
            <p className="text-gray-700">
              Escape Velocity:{" "}
              <span className="font-semibold">{planetData.escape} m/s</span>
            </p>
            <p className="text-gray-700">
              Mean Radius:{" "}
              <span className="font-semibold">{planetData.meanRadius} km</span>
            </p>
            <p className="text-gray-700">
              Equatorial Radius:{" "}
              <span className="font-semibold">{planetData.equaRadius} km</span>
            </p>
            <p className="text-gray-700">
              Polar Radius:{" "}
              <span className="font-semibold">{planetData.polarRadius} km</span>
            </p>
            <p className="text-gray-700">
              Flattening:{" "}
              <span className="font-semibold">{planetData.flattening}</span>
            </p>
            <p className="text-gray-700">
              Dimension:{" "}
              <span className="font-semibold">
                {planetData.dimension || "N/A"}
              </span>
            </p>
            <p className="text-gray-700">
              Sideral Orbit:{" "}
              <span className="font-semibold">
                {planetData.sideralOrbit} days
              </span>
            </p>
            <p className="text-gray-700">
              Sideral Rotation:{" "}
              <span className="font-semibold">
                {planetData.sideralRotation} hours
              </span>
            </p>
            <p className="text-gray-700">
              Around Planet:{" "}
              <span className="font-semibold">
                {planetData.aroundPlanet
                  ? JSON.stringify(planetData.aroundPlanet)
                  : "None"}
              </span>
            </p>
            <p className="text-gray-700">
              Discovered By:{" "}
              <span className="font-semibold">
                {planetData.discoveredBy || "Unknown"}
              </span>
            </p>
            <p className="text-gray-700">
              Discovery Date:{" "}
              <span className="font-semibold">
                {planetData.discoveryDate || "Unknown"}
              </span>
            </p>
            <p className="text-gray-700">
              Alternative Name:{" "}
              <span className="font-semibold">
                {planetData.alternativeName || "None"}
              </span>
            </p>
            <p className="text-gray-700">
              Axial Tilt:{" "}
              <span className="font-semibold">
                {planetData.axialTilt} degrees
              </span>
            </p>
            <p className="text-gray-700">
              Average Temperature:{" "}
              <span className="font-semibold">{planetData.avgTemp} K</span>
            </p>
            <p className="text-gray-700">
              Main Anomaly:{" "}
              <span className="font-semibold">
                {planetData.mainAnomaly} degrees
              </span>
            </p>
            <p className="text-gray-700">
              Argument of Periapsis:{" "}
              <span className="font-semibold">
                {planetData.argPeriapsis} degrees
              </span>
            </p>
            <p className="text-gray-700">
              Longitude of Ascending Node:{" "}
              <span className="font-semibold">
                {planetData.longAscNode} degrees
              </span>
            </p>
            <p className="text-gray-700">
              Body Type:{" "}
              <span className="font-semibold">{planetData.bodyType}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetsDetails;
