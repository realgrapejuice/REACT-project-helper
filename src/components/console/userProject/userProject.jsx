import React, { useEffect, useRef, useState } from "react";
import styles from "./userProject.module.css";
import { useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const UserProject = ({ database, userId }) => {
  const history = useHistory();

  const [currentProject, setCurrentProject] = useState();

  let projectTodo = (currentProject && currentProject.todo) || [];
  const projectName = currentProject && currentProject.projectName;
  const projectId = history.location.state.url;

  // Relative with input
  const inputRef = useRef();
  const checkRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = inputRef.current.value;
    projectTodo.push(userInput);
    database.update(userId, currentProject, projectTodo);
    inputRef.current.value = "";
  };

  // Find delete item index
  const findIndex = (item) => {
    const index = projectTodo.indexOf(item);
    return index;
  };

  const handleDelete = (event) => {
    const node = event.target.parentNode;
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
    projectTodo.splice(index, 1);
    // database update!
    database.update(userId, currentProject, projectTodo);
  };

  // Relative with dnd
  const reorder = (todo, startIndex, endIndex) => {
    const copiedTodo = todo;
    const removed = copiedTodo.splice(startIndex, 1)[0];
    copiedTodo.splice(endIndex, 0, removed);

    return copiedTodo;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === "droppable") {
      const items = reorder(projectTodo, source.index, destination.index);
      projectTodo = items;
      database.update(userId, currentProject, items);
    }
  };

  useEffect(() => {
    if (currentProject) return;
    const stopSync = database.readProject(
      userId,
      (projects) => {
        setCurrentProject(projects);
      },
      projectId
    );
    return () => stopSync();
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{projectName}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          ref={inputRef}
          type="text"
          placeholder="Add Todo"
        />
      </form>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => {
            return (
              <ol
                className={styles.dragBox}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {currentProject &&
                  projectTodo.map((element, index) => {
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
                            <div className={styles.checkbtn}>
                              <input
                                ref={checkRef}
                                className={styles.icon}
                                type="checkbox"
                                id={`check${index}`}
                              />

                              <label
                                className={styles.label}
                                htmlFor={`check${index}`}
                              ></label>
                              <span className={styles.item}>{element}</span>
                            </div>

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
