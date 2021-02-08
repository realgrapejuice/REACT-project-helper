import React from "react";
import styles from "./nextBtn.module.css";

const NextBtn = ({ onSave }) => {
  const handleSaveClick = () => {
    onSave();
  };
  return (
    <button className={styles.nextBtn} type="button" onClick={handleSaveClick}>
      Next Step
    </button>
  );
};

export default NextBtn;
