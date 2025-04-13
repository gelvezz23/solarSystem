import React from "react";
import styles from "./Sun.module.css";

const Sun = () => {
  const { sun } = styles;
  return (
    <div
      title="Sun"
      className={`${sun} absolute w-40 h-40 rounded-full bg-yellow-400 shadow-lg shadow-yellow-500/50 animate-pulse`}
    ></div>
  );
};

export default Sun;
