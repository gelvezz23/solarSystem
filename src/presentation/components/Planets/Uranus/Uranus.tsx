import styles from "./Uranus.module.css";
import Orbit from "../../Orbit";

const Urano = ({
  showAnimation = true,
  showOrbit = true,
  withoutSystem = false,
}) => {
  const { urano, animateUrano, notSystem } = styles;
  return (
    <Orbit planet={"uranus"} showOrbit={showOrbit}>
      <div
        className={`${urano} ${showAnimation && animateUrano} ${
          withoutSystem && notSystem
        }`}
        title="urano"
      ></div>
    </Orbit>
  );
};

export default Urano;
