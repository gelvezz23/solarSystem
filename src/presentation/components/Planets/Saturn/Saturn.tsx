import styles from "./Saturn.module.css";
import Orbit from "../../Orbit";

function Saturn({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) {
  const { saturn, animateSaturn, rings, ring, ring1, ring2, ring3, notSystem } =
    styles;

  return (
    <Orbit planet={"saturn"} showOrbit={showOrbit}>
      <div
        className={`${saturn} ${showAnimation && animateSaturn} ${
          withoutSystem && notSystem
        }`}
      >
        <div className={rings}>
          <div className={`${ring} ${ring1}`}></div>
          <div className={`${ring} ${ring2}`}></div>
          <div className={`${ring} ${ring3}`}></div>
        </div>
      </div>
    </Orbit>
  );
}

export default Saturn;
