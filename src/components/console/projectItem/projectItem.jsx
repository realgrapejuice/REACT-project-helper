import React, { useState } from "react";
import styles from "./projectItem.module.css";

const ProjectItem = ({ item, deleteProject }) => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    status ? setStatus(false) : setStatus(true);
  };

  const boxStyle = status
    ? `${styles.checkDelete} visible`
    : `${styles.checkDelete} hidden`;

  const handleCancelClick = () => {
    toggleStatus();
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    deleteProject(item);
    toggleStatus();
  };

  return (
    <li className={styles.projectItem}>
      <div className={styles.projectBox}>
        <h1>{item.projectName}</h1>
        <span className={styles.date}>{`Created on ${item.date}`}</span>
        <div className={styles.modal} onClick={toggleStatus}>
          <i className="fas fa-times"></i>
        </div>
        <div className={styles.icon}>
          <i className="far fa-folder"></i>
        </div>
        <div className={boxStyle}>
          <h1 className={styles.deleteTitle}>Are you sure?</h1>
          <span className={styles.deleteDesc}>
            Deleted project cannot be recovered
          </span>
          <div className={styles.btnBox}>
            <button
              className={`${styles.btn} ${styles.yes}`}
              type="button"
              onClick={handleDeleteClick}
            >
              <i className="fas fa-check"></i>
            </button>
            <button
              className={`${styles.btn} ${styles.no}`}
              type="button"
              onClick={handleCancelClick}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
