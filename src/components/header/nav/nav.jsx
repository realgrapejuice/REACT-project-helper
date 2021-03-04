import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ signStatus, handleSignOut, userId }) => {
  return (
    <nav className={styles.navBox}>
      {!signStatus ? (
        <>
          <Link to="/login">
            <span className={styles.login}>Log-in</span>
          </Link>
          <Link to="/signup">
            <span className={styles.sign}>Sign Up for Free</span>
          </Link>
        </>
      ) : (
        <>
          <Link
            to={{
              pathname: "/console",
              state: {
                id: userId,
              },
            }}
          >
            <span className={styles.console} title="Go Back To Console">
              Console
            </span>
          </Link>
          <Link
            to={{
              pathname: "/",
              state: null,
            }}
          >
            <span className={styles.sign} onClick={handleSignOut}>
              Sign Out
            </span>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
