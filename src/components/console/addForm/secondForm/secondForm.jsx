import React, { useRef, useState } from "react";
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

  const dragItem = useRef();
  const dragNode = useRef();
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event, param) => {
    dragItem.current = param;
    dragNode.current = event.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (event, param) => {
    const currentItem = dragItem.current;
    if (event.target !== dragNode.current) {
      setTodo((todo) => {
        const newTodo = [...todo];
        const dragItem = newTodo.splice(currentItem, 1);
        console.log(dragItem[0]);
        newTodo.splice(param, 0, dragItem);
        return newTodo;
      });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyle = (param) => {
    const currentItem = dragItem.current;
    if (currentItem === param) {
      return `current dragItem`;
    }
    return "dragItem";
  };

  return (
    <section className={styles.secondForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <div className={styles.form}>
        <form onSubmit={handleAddTodo}>
          <h1>{todoName}</h1>
          <input
            ref={inputRef}
            type="text"
            placeholder="Add Your Tasks"
            required
          />
        </form>
        <ol className="dragBox">
          {todo.map((element, index) => {
            return (
              <li
                key={index}
                className={dragging ? getStyle(index) : "dragItem"}
                onDragStart={(event) => {
                  handleDragStart(event, index);
                }}
                onDragEnter={
                  dragging
                    ? (event) => {
                        handleDragEnter(event, index);
                      }
                    : null
                }
                draggable="true"
              >
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
            );
          })}
        </ol>
      </div>
      <PrevBtn goPrev={goPrev} />
      <NextBtn goNext={goNext} />
    </section>
  );
};

export default SecondForm;
