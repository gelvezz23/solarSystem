import { FC, ReactNode } from "react";
import "./Orbit.css";

interface OrbitProps {
  planet:
    | "mercury"
    | "venus"
    | "earth"
    | "moon"
    | "mars"
    | "jupiter"
    | "saturn"
    | "uranus"
    | "neptune"
    | "pluto";
  showOrbit?: boolean;
  children?: ReactNode;
}

const Orbit: FC<OrbitProps> = ({ planet, showOrbit = true, children }) => {
  return (
    <>
      {showOrbit ? (
        <div className={`orbit ${planet}-orbit`}>{children}</div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Orbit;
