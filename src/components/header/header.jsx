import React from "react";
import styles from "./header.module.css";
import Nav from "./nav/nav";

const Header = ({ authService, signStatus, setSignStatus }) => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>logoinhere</h1>
      </div>
      <Nav
        authService={authService}
        signStatus={signStatus}
        setSignStatus={setSignStatus}
      />
    </header>
  );
};

export default Header;
