import React, { useRef } from "react";

import SaveBtn from "../saveBtn/saveBtn";
import PrevBtn from "../prevBtn/prevBtn";
import StatusBox from "../statusBox/statusBox";
import Todo from "../todo/todo";
import styles from "./secondForm.module.css";

//drag and drop으로 todo 만들고, 우선순위대로 organize 할 수 있도록 구성할 것
const SecondForm = ({
  onXClick,
  title,
  todo,
  todoName,
  setTodo,
  onDelete,
  goPrev,
  onDragEnd,
  virtualList,
  projectList,
  setProjectList,
  database,
  userId,
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

  return (
    <section className={styles.secondForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <div className={styles.form}>
        <form onSubmit={handleAddTodo}>
          <h1>{todoName}</h1>
          <span className={styles.step}>Step 2</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Add Your Tasks"
            required
          />
        </form>
        <Todo
          todo={todo}
          setTodo={setTodo}
          onDelete={onDelete}
          onDragEnd={onDragEnd}
        />
      </div>
      <PrevBtn goPrev={goPrev} />
      <SaveBtn
        onXClick={onXClick}
        virtualList={virtualList}
        projectList={projectList}
        setProjectList={setProjectList}
        todo={todo}
        database={database}
        userId={userId}
      />
    </section>
  );
};

export default SecondForm;
