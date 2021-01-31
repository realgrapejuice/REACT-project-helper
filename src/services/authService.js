import { firebaseAuth, googleProvider, githubProvider } from "./reset_firebase";

class AuthService {
  getAuthProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw Error(`Not Supported Provider ${providerName}`);
    }
  }

  logInWithMail(userMail, userPW) {
    return firebaseAuth //
      .signInWithEmailAndPassword(userMail, userPW)
      .then((result) => console.log(result));
  }

  createAccount(userMail, userPW) {
    const user = userMail.split("@")[0];
    firebaseAuth //
      .createUserWithEmailAndPassword(userMail, userPW)
      .then(window.alert(`Account created Sucessfully ${user}`))
      .catch((error) => {
        throw new Error(error);
      });
  }

  logInOutlink(providerName) {
    const authProvider = this.getAuthProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }
}

export default AuthService;
