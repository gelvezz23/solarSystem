import Moon from "./Moon";
import Orbit from "../../Orbit";
import styles from "./Earth.module.css";

function Earth({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) {
  const { animateEarth, earth, notSystem } = styles;
  return (
    <Orbit planet={"earth"} showOrbit={showOrbit}>
      <div
        className={`${earth} ${showAnimation && animateEarth} 
        ${withoutSystem && notSystem}`}
      >
        <Moon />
      </div>
    </Orbit>
  );
}

export default Earth;
