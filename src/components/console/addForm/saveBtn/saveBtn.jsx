import React from "react";
import styles from "./saveBtn.module.css";

const SaveBtn = ({
  onXClick,
  virtualList,
  projectList,
  setProjectList,
  todo,
  database,
  userId,
}) => {
  const handleSave = () => {
    const newTodo = virtualList[0];
    newTodo.todo = todo;
    const listClone = Object.keys(projectList).map((key) => {
      return projectList[key];
    });
    listClone.unshift(newTodo);
    setProjectList(listClone);
    database.write(userId, newTodo);
    onXClick();
  };
  return (
    <button className={styles.saveBtn} type="button" onClick={handleSave}>
      Save
    </button>
  );
};

export default SaveBtn;
