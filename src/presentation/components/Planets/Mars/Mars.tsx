import Orbit from "../../Orbit";
import styles from "./Mars.module.css";

const Mars = ({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) => {
  const { mars, animateMars, notSystem } = styles;
  return (
    <Orbit planet={"mars"} showOrbit={showOrbit}>
      <div
        className={`${mars} ${showAnimation && animateMars} 
        ${withoutSystem && notSystem}`}
        title="mars"
      ></div>
    </Orbit>
  );
};

export default Mars;
