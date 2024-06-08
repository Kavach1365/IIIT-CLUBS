import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loader;
