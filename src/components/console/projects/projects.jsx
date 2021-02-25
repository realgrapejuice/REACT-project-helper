import React from "react";
import AddItem from "../addItem/addItem";
import ProjectItem from "../projectItem/projectItem";
import styles from "./projects.module.css";

const Projects = ({ projectList, onAddClick, deleteProject, userId }) => {
  const list = Object.keys(projectList)
    .map((key) => {
      return projectList[key];
    })
    .reverse();

  return (
    <div className={styles.container}>
      <h1>Project in Progress</h1>
      <ul className={styles.list}>
        <AddItem onAddClick={onAddClick} />
        {list.map((element) => {
          return (
            <ProjectItem
              key={element.id}
              item={element}
              deleteProject={deleteProject}
              userId={userId}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
