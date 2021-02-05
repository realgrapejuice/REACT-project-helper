import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthService from "./services/authService";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/js/all.js";

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
