import React, { useState } from "react";
import FirstForm from "./firstForm/firstForm";
import SecondForm from "./secondForm/secondForm";

const Addform = ({ onXClick, virtualList, setVirtualList }) => {
  // Save Status
  const [saveStatus, setSaveStatus] = useState(false);

  const toggleStatus = () => {
    saveStatus ? setSaveStatus(false) : setSaveStatus(true);
  };

  // Make Item Object
  const getTime = (time) => {
    const date = new Date(time)
      .toLocaleString("ko-KR", {
        timeZone: "UTC",
      })
      .split(". ")
      .splice(0, 3)
      .join("-");
    return date;
  };

  const makeItem = () => {
    const id = Date.now();
    const date = getTime(id);
    const newItem = {
      id: id,
      date: date,
      projectName: "",
    };
    return newItem;
  };

  const saveName = (name) => {
    const newItem = makeItem();
    newItem.projectName = name;
    const list = [...virtualList];
    list.unshift(newItem);
    setVirtualList(list);
  };

  //Relative with todo
  const [todo, setTodo] = useState([]);

  const findIndex = (item) => {
    const index = todo.indexOf(item);
    return index;
  };

  const handleDelete = (event) => {
    const node = event.target.parentNode;
    const copiedTodo = [...todo];
    let item;
    let index;
    if (node.className === "dragItem") {
      item = node.innerText;
      index = findIndex(item);
    } else if (node.parentNode.className === "dragItem") {
      item = node.parentNode.innerText;
      index = findIndex(item);
    }
    copiedTodo.splice(index, 1);
    setTodo(copiedTodo);
  };

  // Relative with todo-name
  const [todoName, setTodoName] = useState(null);

  // Relative with step
  const [step, setStep] = useState(1);

  const goPrev = () => {
    setStep(step - 1);
    // goPrev가 발생하는 step이 달라서 이렇게 조건을 반영함
    if (step === 2) {
      const copiedList = [...virtualList];
      copiedList.splice(0, 1);
      setVirtualList(copiedList);
    }
  };

  const goNext = () => {
    if (step === 2) {
      !todo.length ? setStep(step) : setStep(step + 1);
    }
  };

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

  //render
  if (step === 1) {
    return (
      <FirstForm
        onXClick={onXClick}
        saveStatus={saveStatus}
        onToggle={toggleStatus}
        saveName={saveName}
        setTodoName={setTodoName}
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
        todoName={todoName}
        setTodo={setTodo}
        onDelete={handleDelete}
        goPrev={goPrev}
        goNext={goNext}
        step={step}
      />
    );
  }
};

export default Addform;
