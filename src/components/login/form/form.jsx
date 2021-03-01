import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Auth from "../aut/auth";
import styles from "./form.module.css";

const Form = ({ authService }) => {
  //Router Variable
  const history = useHistory();

  //Form Input Variable
  const mailRef = useRef();
  const passwordRef = useRef();

  // Make route change
  const goToConsole = (userId) => {
    history.push({
      pathname: `/console`,
      state: { id: userId },
    });
  };

  // Make LogIn Event
  const handleLogIn = (event) => {
    event.preventDefault();
    const userMail = mailRef.current.value;
    const userPW = passwordRef.current.value;
    authService //
      .logInMail(userMail, userPW)
      .then((result) => {
        goToConsole(result.user.uid);
      });
    mailRef.current.value = "";
    passwordRef.current.value = "";
  };

  /* useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setSignStatus(true);
        goToConsole(user.X.X);
      }
    });
  }, [signStatus]); */

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Log In</h1>
        <span>New to StepbyStep?</span>
        <Link to="/signup">
          <span className={styles.signup}>Sign Up For Free</span>
        </Link>
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
        <Link to="/forgot-password">
          <span className={styles.forget}>Forgot Password?</span>
        </Link>
        <button className={styles.login} type="submit">
          Log In
        </button>
        <Auth authService={authService} goToConsole={goToConsole} />
      </form>
    </section>
  );
};

export default Form;
