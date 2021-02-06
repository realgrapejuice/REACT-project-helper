import React from "react";
import styles from "./firstForm.module.css";

const FirstForm = ({ onXClick }) => {
  return (
    <section className={styles.firstForm}>
      <div className={styles.statusBox}>
        <button type="button" onClick={onXClick}>
          <i className="fas fa-times"></i>
        </button>
        <span>Make project (1/3 Stage)</span>
      </div>
      <div className={styles.formBox}>
        <div className={styles.projectName}>
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            required
          />
          <button type="button">Save</button>
        </div>
        <div className={styles.projectItem}>
          <label htmlFor="projectItem">Project Item</label>
          <input
            type="text"
            name="projectItem"
            placeholder="Add Progress"
            required
          />
          <button type="button">Add Progress</button>
        </div>
      </div>
      <div className={styles.itemBox}>
        <ol>
          <li>Example</li>
          <li>Example2</li>
        </ol>
      </div>
    </section>
  );
};

export default FirstForm;
