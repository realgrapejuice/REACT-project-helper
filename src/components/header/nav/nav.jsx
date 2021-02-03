import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ authService }) => {
  const history = useHistory();
  const currentPath = history.location.pathname;

  const goToLogIn = () => {
    history.push("/login");
  };

  const handleSignOut = () => {
    authService //
      .signOut()
      .then(console.log(history));
  };
  return (
    <nav className={styles.navBox}>
      <a href="/about">About</a>
      <a href="/method">How to Use</a>
      <a href="/contact">Contact</a>
      {currentPath === "/login" ? (
        <>
          <a className={styles.login} href="/login">
            Log-in
          </a>
          <a className={styles.sign} href="/signup">
            Sign Up for Free
          </a>
        </>
      ) : (
        <a className={styles.sign} href="/login" onClick={handleSignOut}>
          Sign Out
        </a>
      )}
    </nav>
  );
};

export default Nav;
