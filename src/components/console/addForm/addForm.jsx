import React, { useState } from "react";
import FirstForm from "./firstForm/firstForm";
import SecondForm from "./secondForm/secondForm";

const Addform = ({ onXClick, projectList, setProjectList }) => {
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

  const [todo, setTodo] = useState([]);

  const handleDelete = (item) => {
    const copiedTodo = [...todo];
    const index = todo.indexOf(item);
    copiedTodo.splice(index, 1);
    setTodo(copiedTodo);
  };

  const [step, setStep] = useState(1);

  let title;
  switch (step) {
    case 1:
      title = "투두리스트의 이름을 만들어주세요";
      break;
    case 2:
      title =
        "생각나는 대로 할 일을 적고 우선순위대로 나열해보세요. 자세하지 않아도 좋습니다.";
      break;
    default:
      console.log("Error");
      break;
  }

  const [grab, setGrab] = useState(null);

  //render
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
    return (
      <SecondForm
        onXClick={onXClick}
        title={title}
        todo={todo}
        setTodo={setTodo}
        onDelete={handleDelete}
      />
    );
  }
};

export default Addform;
