import React from "react";
import NextBtn from "../nextBtn/nextBtn";
import StatusBox from "../statusBox/statusBox";
import styles from "./secondForm.module.css";

//drag and drop으로 todo 만들고, 우선순위대로 organize 할 수 있도록 구성할 것
const SecondForm = ({ onXClick, title }) => {
  return (
    <section className={styles.secondForm}>
      <StatusBox onXClick={onXClick} title={title} />
      <div className={styles.form}>
        <form>
          <h1>Todo Name</h1>
          <input type="text" placeholder="Add Your Tasks" />
        </form>
        <ol>
          <li>
            <i className="fas fa-grip-vertical"></i>
            <span>Eat Spagetti</span>
          </li>
        </ol>
      </div>
      <NextBtn />
    </section>
  );
};

export default SecondForm;
