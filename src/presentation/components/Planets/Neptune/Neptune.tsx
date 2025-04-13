import React from "react";
import styles from "./Neptune.module.css";
import Orbit from "../../Orbit";

const Neptune = ({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) => {
  const { neptune, animateNeptune, notSystem } = styles;
  return (
    <Orbit planet={"neptune"} showOrbit={showOrbit}>
      <div
        className={`${neptune} ${showAnimation && animateNeptune} ${
          withoutSystem && notSystem
        }`}
        title="neptuno"
      ></div>
    </Orbit>
  );
};

export default Neptune;
