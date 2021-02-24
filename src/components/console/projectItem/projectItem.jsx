import React from "react";
import styles from "./projectItem.module.css";

const ProjectItem = ({ item }) => {
  return (
    <li className={styles.projectItem}>
      <div className={styles.projectBox}>
        <h1>{item.projectName}</h1>
        <span className={styles.date}>{`Created on ${item.date}`}</span>
        <div className={styles.modal}>
          <i class="fas fa-times"></i>
        </div>
        <div className={styles.icon}>
          <i className="far fa-folder"></i>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
