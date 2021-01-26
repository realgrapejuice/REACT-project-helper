import React from "react";
import Auth from "../aut/auth";
import SignUp from "../signUp/signUp";
import styles from "./form.module.css";

const Form = (props) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Log In</h1>
        <span>New to StepbyStep?</span>
        <SignUp />
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
        <Auth />
      </form>
    </section>
  );
};

export default Form;
