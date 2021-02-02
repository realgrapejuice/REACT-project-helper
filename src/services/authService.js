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

  createAccount(userMail, userPW) {
    const user = userMail.split("@")[0];
    firebaseAuth //
      .createUserWithEmailAndPassword(userMail, userPW)
      .then(window.alert(`Account created Sucessfully ${user}`))
      .catch((error) => {
        throw Error(error);
      });
  }

  logInMail(userMail, userPW) {
    return firebaseAuth //
      .signInWithEmailAndPassword(userMail, userPW)
      .then((result) => console.log(result))
      .catch((error) => {
        throw Error(error);
      });
  }

  logInOutlink(providerName) {
    const authProvider = this.getAuthProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  resetPW(emailAddress) {
    return firebaseAuth.sendPasswordResetEmail(emailAddress);
  }
}

export default AuthService;
