import styles from "./app.module.css";
import Header from "./components/header/header";
import LogIn from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/signUp/signUp";
import FindPW from "./components/login/findPW/findPW";
import Console from "./components/console/console";
import { useState } from "react";

function App({ authService, database }) {
  const [signStatus, setSignStatus] = useState(false);
  const [projectList, setProjectList] = useState({});
  console.log(signStatus);
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header
          authService={authService}
          signStatus={signStatus}
          setSignStatus={setSignStatus}
        />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <LogIn
              authService={authService}
              setSignStatus={setSignStatus}
              signStatus={signStatus}
            />
          </Route>
          <Route path="/console" component={Console}>
            <Console
              database={database}
              projectList={projectList}
              setProjectList={setProjectList}
              setSignStatus={setSignStatus}
            />
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
