import React from "react";
import styles from "./statusBox.module.css";

const StatusBox = ({ onXClick, title }) => (
  <div className={styles.statusBox}>
    <button className={styles.cancel} type="button" onClick={onXClick}>
      <i className="fas fa-times"></i>
    </button>
    <span>{title}</span>
  </div>
);

export default StatusBox;
