import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ authService, signStatus, setSignStatus }) => {
  const history = useHistory();

  const handleSignOut = () => {
    authService //
      .signOut()
      .then(setSignStatus(false));
  };

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
          <Link to="/login">
            <span className={styles.sign} onClick={handleSignOut}>
              Sign Out
            </span>
          </Link>
          <Link
            to={{
              pathname: "/console",
              state: {
                id: history.location.state.id,
              },
            }}
          >
            <span className={styles.console} title="Go Back To Console">
              <i className="fas fa-folder"></i>
            </span>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
