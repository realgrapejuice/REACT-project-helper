import React from "react";
import styles from "./nextBtn.module.css";

const NextBtn = ({ goNext, step }) => {
  const desc = step !== 3 ? "Next Step" : "Save";
  return (
    <>
      <button className={styles.nextBtn} type="button" onClick={goNext}>
        {desc}
      </button>
    </>
  );
};

export default NextBtn;
