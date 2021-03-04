import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Nav from "./nav/nav";

const Header = ({ handleSignOut, signStatus, userId }) => {
  let link;
  if (!signStatus) {
    link = "/login";
  } else {
    link = {
      pathname: "/console",
      state: {
        id: userId,
      },
    };
  }

  return (
    <header className={styles.container}>
      <Link to={link}>
        <div className={styles.logo}>
          <i className="fas fa-shapes"></i>
          <span className={styles.logoDesc}>Project Helper</span>
        </div>
      </Link>
      <Nav
        handleSignOut={handleSignOut}
        signStatus={signStatus}
        userId={userId}
      />
    </header>
  );
};

export default Header;
