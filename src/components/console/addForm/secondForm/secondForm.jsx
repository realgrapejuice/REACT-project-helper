import React, { useRef, useState } from "react";
import NextBtn from "../nextBtn/nextBtn";
import StatusBox from "../statusBox/statusBox";
import styles from "./secondForm.module.css";

//drag and drop으로 todo 만들고, 우선순위대로 organize 할 수 있도록 구성할 것
const SecondForm = ({ onXClick, title }) => {
  const inputRef = useRef();
  const [todo, setTodo] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const copiedTodo = [...todo];
    const input = inputRef.current.value;
    copiedTodo.push(input);
    setTodo(copiedTodo);
    inputRef.current.value = "";
  };

  return (
    <section className={styles.secondForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <div className={styles.form}>
        <form onSubmit={handleAddTodo}>
          <h1>Todo Name</h1>
          <input ref={inputRef} type="text" placeholder="Add Your Tasks" />
        </form>
        <ol className={styles.todo}>
          {todo.map((element) => (
            <li>
              <div className={styles.icon}>
                <i className="fas fa-grip-vertical"></i>
              </div>
              <span>{element}</span>
              <button type="button" className={styles.delete}>
                <i class="far fa-trash-alt"></i>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <NextBtn />
    </section>
  );
};

export default SecondForm;
