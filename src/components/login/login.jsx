import React from "react";
import Form from "./form/form";
import styles from "./login.module.css";

const LogIn = ({ authService, setSignStatus, goToConsole }) => {
  return (
    <main id="container" className={styles.container}>
      <Form
        authService={authService}
        setSignStatus={setSignStatus}
        goToConsole={goToConsole}
      />
    </main>
  );
};

export default LogIn;
