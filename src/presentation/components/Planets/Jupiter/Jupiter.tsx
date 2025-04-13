import React from "react";
import styles from "./Jupiter.module.css";
import Orbit from "../../Orbit";

function Jupiter({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) {
  const { jupiter, animateJupiter, notSystem } = styles;
  return (
    <Orbit planet={"jupiter"} showOrbit={showOrbit}>
      <div
        className={`${jupiter} ${showAnimation && animateJupiter} ${
          withoutSystem && notSystem
        }`}
      ></div>
    </Orbit>
  );
}

export default Jupiter;
