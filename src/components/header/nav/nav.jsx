import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ authService, signStatus, setSignStatus }) => {
  const history = useHistory();
  const currentPath = history.location.pathname;
  const handleSignOut = () => {
    authService //
      .signOut()
      .then(setSignStatus(false));
  };

  return (
    <nav className={styles.navBox}>
      <a href="/about">About</a>
      <a href="/method">How to Use</a>
      <a href="/contact">Contact</a>
      {!signStatus && currentPath === "/login" ? (
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
