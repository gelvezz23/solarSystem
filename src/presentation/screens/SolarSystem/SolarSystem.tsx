import Sun from "@/presentation/components/Sun";
import "./solarSystem.css";
import {
  Earth,
  Mars,
  Mercury,
  Venus,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  Pluto,
} from "@/presentation/components/Planets";
import FloatingButton from "@/presentation/components/FloatingButton";

const SolarSystem = () => {
  return (
    <section>
      <div className="solar-system min-h-screen flex items-center justify-center overflow-hidden">
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
        <Pluto />
      </div>
      <FloatingButton />
    </section>
  );
};

export default SolarSystem;
