import React, { useEffect, useState } from "react";
import styles from "./console.module.css";
import Projects from "./projects/projects";
import Addform from "./addForm/addForm";
import { useHistory } from "react-router-dom";

const Console = ({ database }) => {
  const history = useHistory();
  const [USERID, setUSERID] = useState(history && history.location.state.id);

  const [projectList, setProjectList] = useState({});

  const [addStatus, setAddStatus] = useState(false);

  const toggleAddClick = () => {
    addStatus ? setAddStatus(false) : setAddStatus(true);
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
        <Projects projectList={projectList} onAddClick={toggleAddClick} />
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
