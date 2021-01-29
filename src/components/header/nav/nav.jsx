import React from "react";
import styles from "./nav.module.css";

const Nav = (props) => (
  <nav className={styles.navBox}>
    <a href="/about">About</a>
    <a href="/method">How to Use</a>
    <a href="/contact">Contact</a>
    <a className={styles.login} href="/login">
      Log-in
    </a>
    <a className={styles.signup} href="/signup">
      Sign Up for Free
    </a>
  </nav>
);

export default Nav;
