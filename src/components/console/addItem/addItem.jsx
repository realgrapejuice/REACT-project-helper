import React from "react";
import styles from "./addItem.module.css";

const AddItem = ({ onAddClick }) => {
  const handleAddclick = () => {
    onAddClick();
  };

  return (
    <li className={styles.projectItem} onClick={handleAddclick}>
      <div className={styles.addBox}>
        <div className={styles.icon}>
          <i className="fas fa-plus"></i>
        </div>
        <span>New Venue</span>
      </div>
    </li>
  );
};

export default AddItem;
