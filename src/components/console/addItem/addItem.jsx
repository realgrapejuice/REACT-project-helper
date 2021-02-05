import React from "react";
import styles from "./addItem.module.css";

const AddItem = (props) => (
  <li className={styles.projectItem}>
    <div className={styles.addBox}>
      <div className={styles.icon}>
        <i className="fas fa-plus"></i>
      </div>
      <span>New Venue</span>
    </div>
  </li>
);

export default AddItem;
