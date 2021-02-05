import React from "react";
import styles from "./projectItem.module.css";

const ProjectItem = ({ item }) => (
  <li className={styles.projectItem}>
    <div className={styles.projectBox}>
      <h1>{item.projectName}</h1>
      <span>{`Created on ${item.date}`}</span>
      <div className={styles.icon}>
        <i className="far fa-folder"></i>
      </div>
    </div>
  </li>
);

export default ProjectItem;
