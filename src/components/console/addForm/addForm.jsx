import React, { useState } from "react";
import FirstForm from "./firstForm/firstForm";
import SecondForm from "./secondForm/secondForm";

const Addform = ({
  onXClick,
  projectList,
  setProjectList,
  database,
  userId,
}) => {
  // Virtual list for stable list management
  const [virtualList, setVirtualList] = useState(projectList);

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
      userId,
      id,
      date,
      projectName: "",
    };
    return newItem;
  };

  const saveName = (name) => {
    const newItem = makeItem();
    newItem.projectName = name;
    const list = Object.keys(virtualList).map((key) => {
      return virtualList[key];
    });
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
    } else {
      return;
    }
    copiedTodo.splice(index, 1);
    setTodo(copiedTodo);
  };

  // Relative with todo-name
  const [todoName, setTodoName] = useState(null);

  // Relative with step
  const STEP1 = 1;
  const STEP2 = 2;
  const [step, setStep] = useState(STEP1);

  const goPrev = () => {
    setStep(step - 1);
    // goPrev가 발생하는 step이 달라서 이렇게 조건을 반영함
    if (step === STEP2) {
      const copiedList = [...virtualList];
      copiedList.splice(0, 1);
      setVirtualList(copiedList);
      setTodo([]);
    }
  };

  let title;
  switch (step) {
    case STEP1:
      title = "투두리스트의 이름을 만들어주세요";
      break;
    case STEP2:
      title = "할 일을 적고 우선순위대로 나열해보세요";
      break;
    default:
      console.log("Error");
      break;
  }

  // Relative with dnd
  const reorder = (todo, startIndex, endIndex) => {
    const copiedTodo = [...todo];
    const removed = copiedTodo.splice(startIndex, 1)[0];
    copiedTodo.splice(endIndex, 0, removed);

    return copiedTodo;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === "droppable") {
      const items = reorder(todo, source.index, destination.index);
      setTodo(items);
    }
  };

  //render
  switch (step) {
    case STEP1:
      return (
        <FirstForm
          onXClick={onXClick}
          onToggle={toggleStatus}
          saveName={saveName}
          setTodoName={setTodoName}
          setStep={setStep}
          title={title}
        />
      );
    case STEP2:
      return (
        <SecondForm
          onXClick={onXClick}
          title={title}
          todo={todo}
          todoName={todoName}
          setTodo={setTodo}
          onDelete={handleDelete}
          goPrev={goPrev}
          onDragEnd={onDragEnd}
          virtualList={virtualList}
          projectList={projectList}
          setProjectList={setProjectList}
          database={database}
          userId={userId}
        />
      );
    default:
      break;
  }
};

export default Addform;
