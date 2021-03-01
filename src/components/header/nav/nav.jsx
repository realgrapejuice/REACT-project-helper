import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ signStatus, handleSignOut, userId }) => {
  const consoleIconStyle = signStatus
    ? `${styles.console} visible`
    : `${styles.console} hidden`;

  return (
    <nav className={styles.navBox}>
      <Link to="/about">
        <span className={styles.about}>About</span>
      </Link>
      <Link to="/method">
        <span className={styles.method}>Method</span>
      </Link>
      <Link to="/contact">
        <span className={styles.contact}>Contact</span>
      </Link>
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
      <Link
        to={{
          pathname: "/console",
          state: {
            id: userId,
          },
        }}
      >
        <span className={consoleIconStyle} title="Go Back To Console">
          <i className="fas fa-folder"></i>
        </span>
      </Link>
    </nav>
  );
};

export default Nav;
