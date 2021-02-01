import React from "react";
import styles from "./desc-signup.module.css";

const DescSignUp = (props) => {
  return (
    <article className={styles.container}>
      <h1>
        Use StepbyStep
        <br /> for making better day.
      </h1>
      <ul>
        <li>
          StepbyStep helps you organize your to-do list and focus on priorities.
        </li>
        <li>StepbyStep breaks up large projects into smaller units.</li>
        <li>
          Learn a new methodology for using Todo List and apply it to your day.
        </li>
      </ul>
    </article>
  );
};

export default DescSignUp;
