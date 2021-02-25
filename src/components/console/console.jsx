import React, { useEffect, useState } from "react";
import styles from "./console.module.css";
import Projects from "./projects/projects";
import Addform from "./addForm/addForm";
import { useHistory } from "react-router-dom";

const Console = ({ database }) => {
  // Relative with history
  const history = useHistory();

  // Relative with UserId
  const [USERID, setUSERID] = useState(history && history.location.state.id);

  // Relative with projectList
  const [projectList, setProjectList] = useState({});

  // Relative with addStatus
  const [addStatus, setAddStatus] = useState(false);

  const toggleAddClick = () => {
    addStatus ? setAddStatus(false) : setAddStatus(true);
  };

  // Relative with deleteModal in projects > projectItem
  const [deleteModalStatus, setDeleteModalStatus] = useState(true);

  const handleModalStatus = () => {
    deleteModalStatus
      ? setDeleteModalStatus(false)
      : setDeleteModalStatus(true);
  };

  const deleteProject = (item) => {
    const updated = { ...projectList };
    delete updated[item.id];
    setProjectList(updated);
    database.delete(USERID, item);
  };

  useEffect(() => {
    if (!USERID) return;
    const stopSync = database.read(USERID, (projects) => {
      setProjectList(projects);
    });
    return () => stopSync();
  }, [USERID, database]);

  return (
    <section className={styles.container}>
      {!addStatus ? (
        <Projects
          projectList={projectList}
          onAddClick={toggleAddClick}
          deleteModalStatus={deleteModalStatus}
          handleModalStatus={handleModalStatus}
          deleteProject={deleteProject}
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
    </section>
  );
};

export default Console;
