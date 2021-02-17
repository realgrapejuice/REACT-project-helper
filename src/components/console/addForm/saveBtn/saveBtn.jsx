import React from "react";
import styles from "./saveBtn.module.css";

const SaveBtn = ({ onXClick, virtualList, setVirtualList, ofTodo }) => {
  const handleSave = () => {
    const target = virtualList[0];
    target.todo = ofTodo;
    //여기서 virtualList를 모은다음 원본리스트에 state 업데이트하고 virtualList를 초기화해야 함
  };
  return (
    <button className={styles.saveBtn} type="button" onClick={handleSave}>
      Save
    </button>
  );
};

export default SaveBtn;
