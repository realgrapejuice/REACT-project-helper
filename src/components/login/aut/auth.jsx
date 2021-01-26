import React from "react";
import styles from "./auth.module.css";

const Auth = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.google} type="button">
        Sign with Google
      </button>
      <button className={styles.github} type="button">
        Sign with Github
      </button>
    </div>
  );
};

export default Auth;
