import React from "react";
import styles from "./statusBox.module.css";

const StatusBox = ({ onXClick }) => (
  <div className={styles.statusBox}>
    <button className={styles.cancel} type="button" onClick={onXClick}>
      <i className="fas fa-times"></i>
    </button>
    <span>What is your Project Name? (1/3 Stage)</span>
  </div>
);

export default StatusBox;
