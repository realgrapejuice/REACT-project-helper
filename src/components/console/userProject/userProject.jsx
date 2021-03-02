import React, { useState } from "react";
import styles from "./userProject.module.css";
import { useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const UserProject = ({ database, projectList, setProjectList, userId }) => {
  const history = useHistory();
  const index = history.location.state.url;
  const currentList = projectList[index];
  console.log(projectList);
  console.log(currentList);
  const [todo, setTodo] = useState(currentList.todo);

  const updateProjectList = () => {
    const copiedProjectList = { ...projectList };
    const currentList = copiedProjectList[index];
    currentList.todo = todo;
    setProjectList(copiedProjectList);
  };

  // Find delete item index
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
    // database update!
    database.update(userId, currentList, copiedTodo);
  };

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
      updateProjectList();
      // database update!
      database.update(userId, currentList, items);
    }
  };

  return (
    <div className={styles.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => {
            return (
              <ol
                className={styles.dragBox}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todo.map((element, index) => {
                  return (
                    <Draggable
                      key={`${element}-${index}`}
                      draggableId={`${element}-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          key={index}
                          className="dragItem"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className={styles.icon}>
                            <i className="fas fa-grip-vertical"></i>
                          </div>
                          <span>{element}</span>
                          <button
                            type="button"
                            className={styles.delete}
                            onClick={handleDelete}
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ol>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default UserProject;
