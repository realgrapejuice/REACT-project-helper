import React from "react";
import styles from "./projectItem.module.css";

const ProjectItem = ({ item }) => (
  <li className={styles.projectItem}>
    <a>
      <i className="far fa-folder"></i>
      <span>Hello</span>
    </a>
  </li>
);

export default ProjectItem;
