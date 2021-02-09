import React, { useRef } from "react";
import NextBtn from "../nextBtn/nextBtn";
import PrevBtn from "../prevBtn/prevBtn";
import StatusBox from "../statusBox/statusBox";
import styles from "./secondForm.module.css";

//drag and drop으로 todo 만들고, 우선순위대로 organize 할 수 있도록 구성할 것
const SecondForm = ({
  onXClick,
  title,
  todo,
  setTodo,
  onDelete,
  todoName,
  goPrev,
  goNext,
}) => {
  const inputRef = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const copiedTodo = [...todo];
    const input = inputRef.current.value;
    copiedTodo.push(input);
    setTodo(copiedTodo);
    inputRef.current.value = "";
  };

  const handleDelete = (item) => {
    onDelete(item);
  };

  return (
    <section className={styles.secondForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <div className={styles.form}>
        <form onSubmit={handleAddTodo}>
          <h1>{todoName}</h1>
          <input ref={inputRef} type="text" placeholder="Add Your Tasks" />
        </form>
        <ol className={styles.todo}>
          {todo.map((element) => (
            <li draggable="true">
              <div className={styles.icon}>
                <i className="fas fa-grip-vertical"></i>
              </div>
              <span>{element}</span>
              <button
                type="button"
                className={styles.delete}
                onClick={handleDelete}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <PrevBtn goPrev={goPrev} />
      <NextBtn goNext={goNext} />
    </section>
  );
};

export default SecondForm;
