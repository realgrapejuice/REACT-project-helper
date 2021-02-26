import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "./form/form";
import styles from "./login.module.css";

const LogIn = ({ authService, setSignStatus }) => {
  const history = useHistory();
  console.log(history);

  const createSquare = () => {
    const container = document.querySelector("#container");
    const square = document.createElement("span");
    const colors = ["#f47d31", "#ffce00", "#413d45", "#ffefa3"];
    square.id = "square";
    let size = Math.random() * 20;
    let bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";

    square.style.left = Math.random() * window.innerWidth + "px";
    square.style.top = Math.random() * window.innerHeight + "px";

    square.style.backgroundColor = bg;

    // 이 이벤트가 계속해서 발생하고 있는 것이 아닌지 염려가 됨
    if (history.location.pathname === "/login") {
      container.appendChild(square);
    } else {
      return;
    }

    setTimeout(() => {
      square.remove();
    }, 6000);
  };

  useEffect(() => {
    setInterval(createSquare, 100);
  });

  return (
    <main id="container" className={styles.container}>
      <Form authService={authService} setSignStatus={setSignStatus} />
    </main>
  );
};

export default LogIn;
