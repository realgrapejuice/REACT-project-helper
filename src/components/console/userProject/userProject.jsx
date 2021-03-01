import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./userProject.module.css";

const UserProject = ({ projectList }) => {
  const history = useHistory();
  const index = history.location.state.url;
  const currentList = projectList[index];

  return <h1>Hello</h1>;
};

export default UserProject;
