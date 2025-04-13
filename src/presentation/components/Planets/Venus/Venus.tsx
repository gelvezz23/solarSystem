import styles from "./Venus.module.css";
import Orbit from "../../Orbit";

function Venus({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) {
  const { venus, animateVenus, notSystem } = styles;
  return (
    <Orbit planet={"venus"} showOrbit={showOrbit}>
      <div
        className={`${venus} ${showAnimation && animateVenus} ${
          withoutSystem && notSystem
        }`}
      ></div>
    </Orbit>
  );
}

export default Venus;
