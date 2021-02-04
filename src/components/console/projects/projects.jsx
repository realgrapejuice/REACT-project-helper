import React from "react";
import ProjectItem from "../projectItem/projectItem";
import styles from "./projects.module.css";

const Projects = ({ projectList, setProjectList }) => {
  return (
    <ul className={styles.projectList}>
      {projectList.map((element) => {
        <ProjectItem item={element} />;
      })}
    </ul>
  );
};

export default Projects;
