import React from "react";
import AddItem from "../addItem/addItem";
import ProjectItem from "../projectItem/projectItem";
import styles from "./projects.module.css";

const Projects = ({ projectList, onAddClick }) => {
  return (
    <div className={styles.container}>
      <h1>Project in Progress</h1>
      <ul className={styles.list}>
        <AddItem onAddClick={onAddClick} />
        {projectList.map((element) => {
          return <ProjectItem key={element.id} item={element} />;
        })}
      </ul>
    </div>
  );
};

export default Projects;
