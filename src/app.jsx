import styles from "./app.module.css";
import Header from "./components/header/header";
import LogIn from "./components/login/login";
import SignUp from "./components/signUp/signUp";
import FindPW from "./components/login/findPW/findPW";
import Console from "./components/console/console";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import firebase from "firebase";

function App({ authService, database }) {
  const [signStatus, setSignStatus] = useState(false);
  const [projectList, setProjectList] = useState({});
  let userId = authService.getUser();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setSignStatus(true);
    } else {
      setSignStatus(false);
    }
  });

  const handleSignOut = () => {
    authService //
      .signOut();
    setSignStatus(false);
  };

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header
          handleSignOut={handleSignOut}
          signStatus={signStatus}
          userId={userId}
        />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <LogIn authService={authService} setSignStatus={setSignStatus} />
          </Route>
          <Route path="/console">
            <Console
              authService={authService}
              database={database}
              projectList={projectList}
              setProjectList={setProjectList}
              setSignStatus={setSignStatus}
              userId={userId}
            />
          </Route>
          <Route path="/forgot-password">
            <FindPW authService={authService} />
          </Route>
          <Route path="/signup">
            <SignUp authService={authService} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
