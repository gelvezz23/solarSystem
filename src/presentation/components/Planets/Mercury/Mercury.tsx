import React from "react";
import styles from "./mercury.module.css";
import Orbit from "../../Orbit";

const Mercury = ({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) => {
  const { mercury, notSystem, animateMercury } = styles;
  return (
    <Orbit planet={"mercury"} showOrbit={showOrbit}>
      <div
        className={`${mercury} ${showAnimation && animateMercury} ${
          withoutSystem && notSystem
        }`}
        title="mercury"
      ></div>
    </Orbit>
  );
};

export default Mercury;
