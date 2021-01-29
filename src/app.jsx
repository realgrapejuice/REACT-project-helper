import styles from "./app.module.css";
import Header from "./components/header/header";
import LogIn from "./components/login/login";

function App() {
  //여기서 로그인 status를 분리하는 로직을 구성하고 반영하는 것이 좋을듯

  return (
    <div>
      <Header />
      <LogIn />
    </div>
  );
}

export default App;
