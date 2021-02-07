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
        <input type="text" placeholder="Project Name" />
        <form>
          <input type="text" placeholder="Add todo" />
          <button type="submit">Save</button>
        </form>
        <ol>
          <li></li>
        </ol>
      </div>
    </section>
  );
};

export default FirstForm;
