import React from "react";
import styles from "./saveBtn.module.css";

const SaveBtn = ({
  onXClick,
  virtualList,
  projectList,
  setProjectList,
  ofTodo,
}) => {
  const handleSave = () => {
    const newTodo = virtualList[0];
    newTodo.todo = ofTodo;
    const listClone = [...projectList];
    listClone.unshift(newTodo);
    setProjectList(listClone);
    onXClick();
  };
  return (
    <button className={styles.saveBtn} type="button" onClick={handleSave}>
      Save
    </button>
  );
};

export default SaveBtn;
