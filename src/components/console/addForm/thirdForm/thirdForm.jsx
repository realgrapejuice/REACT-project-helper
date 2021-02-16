import React from "react";
import NextBtn from "../nextBtn/nextBtn";
import PrevBtn from "../prevBtn/prevBtn";
import StatusBox from "../statusBox/statusBox";
import Todo from "../todo/todo";
import styles from "./thirdForm.module.css";

const ThirdForm = ({
  onXClick,
  title,
  todo,
  setTodo,
  onDelete,
  goPrev,
  goNext,
  step,
}) => {
  return (
    <section className={styles.thirdForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <div className={styles.oldTodo}>
        <h1>Old List</h1>
        <Todo todo={todo} setTodo={setTodo} onDelete={onDelete} />
      </div>
      <div className={styles.newTodo}>
        <h1>New List</h1>
        <Todo todo={todo} setTodo={setTodo} onDelete={onDelete} />
      </div>
      <PrevBtn goPrev={goPrev} />
      <NextBtn goNext={goNext} step={step} />
    </section>
  );
};

export default ThirdForm;
