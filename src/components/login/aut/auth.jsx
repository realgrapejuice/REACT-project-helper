import React from "react";
import styles from "./auth.module.css";

const Auth = ({ authService, goToConsole, setSignStatus }) => {
  const handleClick = (event) => {
    const provider = event.target.innerText.split(" ")[2];
    authService //
      .logInOutlink(provider)
      .then((result) => goToConsole(result.user.uid))
      .then(setSignStatus(true));
  };

  return (
    <div className={styles.container}>
      <button className={styles.google} type="button" onClick={handleClick}>
        Sign with Google
      </button>
      <button className={styles.github} type="button" onClick={handleClick}>
        Sign with Github
      </button>
    </div>
  );
};

export default Auth;
