import styles from "./app.module.css";
import Header from "./components/header/header";
import LogIn from "./components/login/login";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/signUp/signUp";
import FindPW from "./components/login/findPW/findPW";
import Console from "./components/console/console";

function App({ authService }) {
  //여기서 로그인 status를 분리하는 로직을 구성하고 반영하는 것이 좋을듯

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header authService={authService} />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <LogIn authService={authService} />
          </Route>
          <Route path="/console">
            <Console />
          </Route>
          <Route path="/forgot-password">
            <FindPW authService={authService} />
          </Route>
          <Route path="/about"></Route>
          <Route path="/method"></Route>
          <Route path="/contact"></Route>
          <Route path="/signup">
            <SignUp authService={authService} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
