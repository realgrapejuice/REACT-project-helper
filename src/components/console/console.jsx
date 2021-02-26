import React, { useEffect, useState } from "react";
import styles from "./console.module.css";
import Projects from "./projects/projects";
import Addform from "./addForm/addForm";
import { Route, useHistory } from "react-router-dom";
import UserProject from "./userProject/userProject";

const Console = ({
  authService,
  database,
  projectList,
  setProjectList,
  setSignStatus,
}) => {
  // Relative with addStatus
  const [addStatus, setAddStatus] = useState(false);

  const toggleAddClick = () => {
    addStatus ? setAddStatus(false) : setAddStatus(true);
  };

  // Relative with history
  const history = useHistory();
  // Relative with UserId
  let USERID;
  if (history.location.state.id) {
    USERID = history.location.state.id;
  } else {
    USERID = authService.getUser();
  }

  // Relative with deleteModal in projects > projectItem
  const deleteProject = (item) => {
    const updated = { ...projectList };
    delete updated[item.id];
    setProjectList(updated);
    database.delete(USERID, item);
  };

  const list = Object.keys(projectList)
    .map((key) => {
      return projectList[key];
    })
    .reverse();

  useEffect(() => {
    if (!USERID) return;
    const stopSync = database.read(USERID, (projects) => {
      setProjectList(projects);
    });
    setSignStatus(true);
    return () => stopSync();
  }, [USERID, database, setProjectList]);

  return (
    <section className={styles.container}>
      <Route exact path="/console">
        {!addStatus ? (
          <Projects
            projectList={projectList}
            onAddClick={toggleAddClick}
            deleteProject={deleteProject}
            userId={USERID}
            list={list}
          />
        ) : (
          <Addform
            onXClick={toggleAddClick}
            projectList={projectList}
            setProjectList={setProjectList}
            database={database}
            userId={USERID}
          />
        )}
      </Route>
      <Route path={`/console/:id`}>
        <UserProject projectList={projectList} userId={USERID} />
      </Route>
    </section>
  );
};

export default Console;
