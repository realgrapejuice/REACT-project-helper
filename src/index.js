import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthService from "./services/authService";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/js/all.js";
import Database from "./services/database";

const authService = new AuthService();
const database = new Database();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} database={database} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
