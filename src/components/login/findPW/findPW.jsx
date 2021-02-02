import React, { useRef } from "react";
import styles from "./findPW.module.css";

const FindPW = ({ authService }) => {
  const mailRef = useRef();
  const handleResetPW = (event) => {
    event.preventDefault();
    const userMail = mailRef.current.value;
    authService //
      .resetPW(userMail);
    mailRef.current.value = "";
  };

  return (
    <section className={styles.container}>
      <div>
        <h1>Forgot your Password?</h1>
        <span>
          Please verify your email for us. We'll send instructions to reset your
          password.
        </span>
        <input
          ref={mailRef}
          type="email"
          placeholder="Email Address"
          required
        />
        <button onClick={handleResetPW} type="button">
          Reset password
        </button>
      </div>
    </section>
  );
};

export default FindPW;
