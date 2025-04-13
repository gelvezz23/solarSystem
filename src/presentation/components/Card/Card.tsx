import { PlanetData } from "@/entities/Planets";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Card: FC<{ planet: PlanetData }> = ({ planet }) => {
  return (
    <>
      <Link
        href={`/planets/${planet.englishName.toLowerCase()}`}
        className="block"
      >
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={`/api/images/${planet.englishName.toLowerCase()}.jpg`}
            alt={planet.englishName}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-opacity duration-300 hover:opacity-90"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            {planet.englishName}
          </h2>
        </div>
      </Link>
    </>
  );
};

export default Card;
