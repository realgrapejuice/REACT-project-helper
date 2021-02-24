import React, { useRef } from "react";
import styles from "./firstForm.module.css";
import StatusBox from "../statusBox/statusBox";

const FirstForm = ({
  onXClick,
  onToggle,
  saveName,
  setTodoName,
  setStep,
  title,
}) => {
  const titleRef = useRef();
  const date = Date.now();

  // relative with submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleRef.current.value || `Project ${date}`;
    saveName(title);
    setTodoName(title);
    onToggle();
    setStep(2);
    titleRef.current.value = "";
  };

  return (
    <section className={styles.firstForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <form className={styles.title} onSubmit={handleSubmit}>
        <span>Step 1</span>
        <label htmlFor="name">Todo-list Name</label>
        <input
          ref={titleRef}
          id="name"
          type="text"
          name="name"
          placeholder="Input Here!"
          required
        />
        <button type="submit">Save</button>
      </form>
    </section>
  );
};

export default FirstForm;
