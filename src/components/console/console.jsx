import React, { useState } from "react";
import styles from "./console.module.css";
import Projects from "./projects/projects";

const Console = (props) => {
  const exProject = [
    {
      id: 0,
      date: "2021-02-05",
      projectName: "makeApp",
    },
    {
      id: 1,
      date: "2020-12-31",
      projectName: "20210204",
    },
    {
      id: 2,
      date: "2020-08-09",
      projectName: "example",
    },
    {
      id: 3,
      date: "2021-02-15",
      projectName: "box-sizing",
    },
  ];

  const [projectList, setProjectList] = useState(exProject);

  return (
    <section className={styles.container}>
      <Projects projectList={projectList} setProjectList={setProjectList} />
    </section>
  );
};

export default Console;
