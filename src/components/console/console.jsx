import React, { useEffect, useState } from "react";
import styles from "./console.module.css";
import Projects from "./projects/projects";
import Addform from "./addForm/addForm";

const Console = (props) => {
  const exProject = [
    {
      id: 0,
      date: "2021-02-05",
      projectName: "makeApp",
      todo: [],
    },
    {
      id: 1,
      date: "2020-12-31",
      projectName: "20210204",
      todo: [],
    },
    {
      id: 2,
      date: "2020-08-09",
      projectName: "example",
      todo: [],
    },
    {
      id: 3,
      date: "2021-02-15",
      projectName: "box-sizing",
      todo: [],
    },
  ];

  const [projectList, setProjectList] = useState(exProject);
  const [virtualList, setVirtualList] = useState([...projectList]);
  const [addStatus, setAddStatus] = useState(false);

  const toggleAddClick = () => {
    addStatus ? setAddStatus(false) : setAddStatus(true);
  };

  useEffect(() => {
    setVirtualList([...projectList]);
  }, [projectList]);

  return (
    <section className={styles.container}>
      {!addStatus ? (
        <Projects projectList={projectList} onAddClick={toggleAddClick} />
      ) : (
        <Addform
          onXClick={toggleAddClick}
          virtualList={virtualList}
          setVirtualList={setVirtualList}
          projectList={projectList}
          setProjectList={setProjectList}
        />
      )}
    </section>
  );
};

export default Console;
