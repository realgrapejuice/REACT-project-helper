import React, { useEffect, useState } from "react";
import styles from "./userProject.module.css";
import { useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const UserProject = ({ database, userId }) => {
  const history = useHistory();
  const index = history.location.state.url;
  const [currentProject, setCurrentProject] = useState();

  const projectTodo = currentProject && currentProject.todo;

  // Find delete item index
  const findIndex = (item) => {
    const index = projectTodo.indexOf(item);
    return index;
  };

  const handleDelete = (event) => {
    const node = event.target.parentNode;
    const copiedTodo = projectTodo;
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
    setCurrentProject(copiedTodo);
    // database update!
    database.update(userId, currentProject && currentProject, copiedTodo);
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
    if (!destination) {
      return;
    }

    if (source.droppableId === "droppable") {
      const items = reorder(projectTodo, source.index, destination.index);
      setCurrentProject(items);
      // database update!
      database.update(userId, currentProject && currentProject, items);
    }
  };

  useEffect(() => {
    if (currentProject) return;
    const stopSync = database.readProject(
      userId,
      (projects) => {
        setCurrentProject(projects);
      },
      index
    );
    return () => stopSync();
  }, [userId, database, setCurrentProject]);

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
