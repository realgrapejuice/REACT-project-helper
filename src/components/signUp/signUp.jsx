import React from "react";
import DescSignUp from "./desc-signup/desc-signup";
import FormSignUp from "./form-signup/form-signup";
import styles from "./signUp.module.css";

const SignUp = ({ authService }) => {
  return (
    <div className={styles.container}>
      <DescSignUp />
      <FormSignUp authService={authService} />
    </div>
  );
};

export default SignUp;
