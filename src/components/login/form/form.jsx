import React from "react";
import Auth from "../aut/auth";
import SignUpBtn from "../signUpBtn/signUpBtn";
import styles from "./form.module.css";

const Form = ({ authService }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Log In</h1>
        <span>New to StepbyStep?</span>
        <SignUpBtn />
      </header>
      <form className={styles.form}>
        <input
          className={styles.mail}
          type="text"
          placeholder="E-mail"
          required
        />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          required
        />
        <button className={styles.forget} type="button">
          Forgot Password?
        </button>
        <button className={styles.login} type="submit">
          Log In
        </button>
        <Auth authService={authService} />
      </form>
    </section>
  );
};

export default Form;
