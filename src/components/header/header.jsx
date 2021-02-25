import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./header.module.css";
import Nav from "./nav/nav";

const Header = ({ authService, signStatus, setSignStatus }) => {
  return (
    <header className={styles.container}>
      <Link
        to={{
          pathname: "/console",
        }}
      >
        <div className={styles.logo}>
          <h1>logoinhere</h1>
        </div>
      </Link>
      <Nav
        authService={authService}
        signStatus={signStatus}
        setSignStatus={setSignStatus}
      />
    </header>
  );
};

export default Header;
