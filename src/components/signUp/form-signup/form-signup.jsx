import React, { useRef } from "react";
import styles from "./form-signup.module.css";

const FormSignUp = ({ authService }) => {
  const mailRef = useRef();
  const passwordRef = useRef();

  const handleCreateAccount = (event) => {
    event.preventDefault();
    const userMail = mailRef.current.value;
    const userPW = passwordRef.current.value;
    authService //
      .createAccount(userMail, userPW);
    mailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Sign Up</h1>
        <span>Already Have An Account?</span>
        <button className={styles.button} type="button">
          Log In
        </button>
      </header>
      <form className={styles.form} onSubmit={handleCreateAccount}>
        <input
          ref={mailRef}
          type="mail"
          placeholder="Email Address"
          name="email"
          spellCheck="false"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          name="password"
          spellCheck="false"
          required
        />
        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </section>
  );
};

export default FormSignUp;
