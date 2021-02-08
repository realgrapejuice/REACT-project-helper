import React, { useState } from "react";
import FirstForm from "./firstForm/firstForm";
import SecondForm from "./secondForm/secondForm";

const Addform = ({ onXClick, projectList, setProjectList }) => {
  const [step, setStep] = useState(1);
  const [saveStatus, setSaveStatus] = useState(false);

  const toggleStatus = () => {
    saveStatus ? setSaveStatus(false) : setSaveStatus(true);
  };

  const makeItem = () => {
    const id = Date.now();
    const date = new Date(id)
      .toLocaleString("ko-KR", {
        timeZone: "UTC",
      })
      .split(". ")
      .splice(0, 3)
      .join("-");
    const newItem = {
      id: id,
      date: date,
      projectName: "",
    };
    return newItem;
  };

  const saveTitle = (name) => {
    const newItem = makeItem();
    newItem.projectName = name;
    const list = [...projectList];
    list.push(newItem);
    setProjectList(list);
  };

  let title;
  switch (step) {
    case 1:
      title = "What is your Project Name?";
      break;
    case 2:
      title = "Create a todo list as you think";
      break;
    default:
      console.log("Error");
      break;
  }

  console.log(title);

  if (step === 1) {
    return (
      <FirstForm
        onXClick={onXClick}
        saveStatus={saveStatus}
        onToggle={toggleStatus}
        saveTitle={saveTitle}
        setStep={setStep}
        title={title}
      />
    );
  } else if (step === 2) {
    return <SecondForm onXClick={onXClick} title={title} />;
  }
};

export default Addform;
