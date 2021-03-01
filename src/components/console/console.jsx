import React, { useEffect, useState } from "react";
import styles from "./console.module.css";
import Projects from "./projects/projects";
import Addform from "./addForm/addForm";
import { Route, useHistory } from "react-router-dom";
import UserProject from "./userProject/userProject";

const Console = ({
  database,
  projectList,
  setProjectList,
  setSignStatus,
  userId,
}) => {
  // Relative with addStatus
  const [addStatus, setAddStatus] = useState(false);

  const toggleAddClick = () => {
    addStatus ? setAddStatus(false) : setAddStatus(true);
  };

  // Relative with deleteModal in projects > projectItem
  const deleteProject = (item) => {
    const updated = { ...projectList };
    delete updated[item.id];
    setProjectList(updated);
    database.delete(userId, item);
  };

  const list = Object.keys(projectList)
    .map((key) => {
      return projectList[key];
    })
    .reverse();

  useEffect(() => {
    if (!userId) return;
    const stopSync = database.read(userId, (projects) => {
      setProjectList(projects);
    });
    setSignStatus(true);
    return () => stopSync();
  }, [userId, database, setProjectList]);

  return (
    <section className={styles.container}>
      <Route exact path="/console">
        {!addStatus ? (
          <Projects
            onAddClick={toggleAddClick}
            deleteProject={deleteProject}
            userId={userId}
            list={list}
          />
        ) : (
          <Addform
            onXClick={toggleAddClick}
            projectList={projectList}
            setProjectList={setProjectList}
            database={database}
            userId={userId}
          />
        )}
      </Route>
      <Route path={`/console/:id`}>
        <UserProject projectList={projectList} />
      </Route>
    </section>
  );
};

export default Console;
