import React from "react";
import styles from "./Pluto.module.css";
import Orbit from "../../Orbit";

const Pluto = ({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) => {
  const { pluto, animatePluto, notSystem } = styles;

  return (
    <Orbit planet={"pluto"} showOrbit={showOrbit}>
      <div
        className={`${pluto} ${showAnimation && animatePluto} ${
          withoutSystem && notSystem
        }`}
        title="pluton"
      ></div>
    </Orbit>
  );
};

export default Pluto;
