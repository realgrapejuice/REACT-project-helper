import React from "react";
import styles from "./firstForm.module.css";
import NextBtn from "../nextBtn/nextBtn";
import StatusBox from "../statusBox/statusBox";

const FirstForm = ({ onXClick }) => {
  return (
    <section className={styles.firstForm}>
      <StatusBox onXClick={onXClick} />
      <form className={styles.title}>
        <label htmlFor="name">Project Name</label>
        <input id="name" type="text" name="name" placeholder="Input Here!" />
        <button type="submit">Save</button>
      </form>
      <NextBtn />
    </section>
  );
};

export default FirstForm;
