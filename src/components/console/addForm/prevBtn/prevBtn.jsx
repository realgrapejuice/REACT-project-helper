import React from "react";
import styles from "./prevBtn.module.css";

const PrevBtn = ({ goPrev }) => (
  <button className={styles.prevBtn} type="button" onClick={goPrev}>
    Prev Step
  </button>
);

export default PrevBtn;
