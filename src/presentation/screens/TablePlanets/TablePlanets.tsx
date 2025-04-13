import Sun from "@/presentation/components/Sun";
import styles from "./tablePlanets.module.css";
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Pluto,
  Saturn,
  Uranus,
  Venus,
} from "@/presentation/components/Planets";
import { FC, ReactElement } from "react";

const planets: string[] = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Neptuno",
  "Pluton",
];

export const SelectPlanet: FC<{ planet: string }> = ({ planet }) => {
  const planetComponents: {
    [value: string]: ReactElement;
  } = {
    Mercurio: (
      <Mercury showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
    Venus: (
      <Venus showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
    Tierra: (
      <Earth showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
    Marte: (
      <Mars showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
    Júpiter: (
      <Jupiter showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
    Saturno: (
      <Saturn showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
    Urano: (
      <Uranus showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
    Neptuno: (
      <Neptune showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
    Pluton: (
      <Pluto showAnimation={false} showOrbit={false} withoutSystem={true} />
    ),
  };

  return planetComponents[planet] || null;
};

const TablePlanets = () => {
  const { row, container } = styles;
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Apariencia de los Planetas
      </h1>
      <section className={container}>
        <div className={row} key={"Sol"}>
          <h5>Sol</h5>
          <Sun />
        </div>
        {planets.map((planet) => {
          return (
            <div className={row} key={planet}>
              <div>
                <h5>{planet}</h5>
              </div>
              <SelectPlanet planet={planet} />
            </div>
          );
        })}
      </section>
      <div id="content-below"></div>
    </>
  );
};

export default TablePlanets;
