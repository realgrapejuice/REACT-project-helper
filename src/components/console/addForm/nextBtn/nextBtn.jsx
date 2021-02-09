import React from "react";

import styles from "./nextBtn.module.css";

const NextBtn = ({ goNext }) => {
  return (
    <>
      <button className={styles.nextBtn} type="button" onClick={goNext}>
        Next Step
      </button>
    </>
  );
};

export default NextBtn;
