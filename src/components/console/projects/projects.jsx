import React from "react";
import AddItem from "../addItem/addItem";
import ProjectItem from "../projectItem/projectItem";
import styles from "./projects.module.css";

const Projects = ({ projectList, setProjectList }) => {
  return (
    <div className={styles.container}>
      <h1>Project in Progress</h1>
      <ul className={styles.list}>
        <AddItem />
        {projectList.map((element) => {
          return <ProjectItem item={element} />;
        })}
      </ul>
    </div>
  );
};

export default Projects;
