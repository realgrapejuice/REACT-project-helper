import React from "react";
import styles from "./header.module.css";
import Nav from "./nav/nav";

const Header = ({ handleSignOut, signStatus, userId }) => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>logoinhere</h1>
      </div>
      <Nav
        handleSignOut={handleSignOut}
        signStatus={signStatus}
        userId={userId}
      />
    </header>
  );
};

export default Header;
