import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "./form/form";
import styles from "./login.module.css";

const LogIn = ({ authService, setSignStatus, signStatus }) => {
  // 로그아웃 후에 이벤트 발생 속도가 빨라지는 문제를 보완할 필요가 있음
  const history = useHistory();
  const createSquare = () => {
    const container = document.querySelector("#container");
    const square = document.createElement("span");
    const colors = ["#f47d31", "#ffce00", "#413d45", "#ffefa3"];
    square.id = "square";
    let size = Math.random() * 10;
    let bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";

    square.style.left = Math.random() * window.innerWidth + "px";
    square.style.top = Math.random() * window.innerHeight + "px";

    square.style.backgroundColor = bg;

    if (history.location.pathname === "/") {
      container.appendChild(square);
    } else {
      return;
    }

    setTimeout(() => {
      square.remove();
    }, 5000);
  };

  useEffect(() => {
    setInterval(createSquare, 350);
  }, []);

  return (
    <main id="container" className={styles.container}>
      <Form
        authService={authService}
        setSignStatus={setSignStatus}
        signStatus={signStatus}
      />
    </main>
  );
};

export default LogIn;
