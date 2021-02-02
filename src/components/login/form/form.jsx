import React, { useRef } from "react";
import { useRouteMatch } from "react-router-dom";
import Auth from "../aut/auth";
import styles from "./form.module.css";

const Form = ({ authService }) => {
  const mailRef = useRef();
  const passwordRef = useRef();

  const handleLogIn = (event) => {
    event.preventDefault();
    const userMail = mailRef.current.value;
    const userPW = passwordRef.current.value;
    authService //
      .logInMail(userMail, userPW)
      .then((result) => console.log(result));
    mailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const { url } = useRouteMatch();

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Log In</h1>
        <span>New to StepbyStep?</span>
        <button className={styles.button} type="button">
          Sign Up For Free
        </button>
      </header>
      <form className={styles.form} onSubmit={handleLogIn}>
        <input
          ref={mailRef}
          className={styles.mail}
          type="text"
          placeholder="E-mail"
          required
        />
        <input
          ref={passwordRef}
          className={styles.password}
          type="password"
          placeholder="Password"
          required
        />
        <a className={styles.forget} href={`${url}/forgot-password`}>
          Forgot Password?
        </a>
        <button className={styles.login} type="submit">
          Log In
        </button>
        <Auth authService={authService} />
      </form>
    </section>
  );
};

export default Form;
