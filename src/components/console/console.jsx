import React, { useState } from "react";
import styles from "./console.module.css";
import Projects from "./projects/projects";

const Console = (props) => {
  const [projectList, setProjectList] = useState([
    {
      id: 0,
      projectName: "makeApp",
    },
    {
      id: 1,
      projectName: "20210204",
    },
  ]);

  return (
    <section className={styles.container}>
      <h1>StepByStep Project</h1>
      <Projects projectList={projectList} setProjectList={setProjectList} />
    </section>
  );
};

export default Console;
