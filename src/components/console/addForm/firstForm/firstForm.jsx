import React, { useRef } from "react";
import styles from "./firstForm.module.css";
import NextBtn from "../nextBtn/nextBtn";
import StatusBox from "../statusBox/statusBox";
import SecondForm from "../secondForm/secondForm";

const FirstForm = ({
  onXClick,
  saveStatus,
  onToggle,
  saveTitle,
  setStep,
  title,
}) => {
  const titleRef = useRef();

  // relative with submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    saveTitle(title);
    onToggle();
    titleRef.current.value = "";
  };

  //relative with next button
  const handleSaveTitle = () => {
    setStep(2);
  };

  return (
    <section className={styles.firstForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <form className={styles.title} onSubmit={handleSubmit}>
        <span>Step 1</span>
        <label htmlFor="name">Project Name</label>
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
      {saveStatus ? <NextBtn onSave={handleSaveTitle} /> : ""}
    </section>
  );
};

export default FirstForm;
