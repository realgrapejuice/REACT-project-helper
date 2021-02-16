import React, { useRef } from "react";
import NextBtn from "../nextBtn/nextBtn";
import OfficialTodo from "../officialTodo/officilaTodo";
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
  onDragEnd,
  ofTodo,
  setOfTodo,
}) => {
  const inputRef = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const copiedTodo = [...ofTodo];
    const input = inputRef.current.value;
    copiedTodo.push(input);
    setOfTodo(copiedTodo);
    inputRef.current.value = "";
  };

  return (
    <section className={styles.thirdForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <div className={styles.oldTodo}>
        <h1>Old List</h1>
        <Todo
          todo={todo}
          setTodo={setTodo}
          onDelete={onDelete}
          onDragEnd={onDragEnd}
        />
      </div>
      <div className={styles.newTodo}>
        <h1>New List</h1>
        <form onSubmit={handleAddTodo}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Add Your Tasks"
            required
          />
        </form>
        <OfficialTodo
          ofTodo={ofTodo}
          setOfTodo={setOfTodo}
          onDelete={onDelete}
          onDragEnd={onDragEnd}
        />
      </div>
      <PrevBtn goPrev={goPrev} />
      <NextBtn goNext={goNext} step={step} />
    </section>
  );
};

export default ThirdForm;
