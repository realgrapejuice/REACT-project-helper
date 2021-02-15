import React from "react";
import styles from "./todo.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Todo = ({ todo, setTodo, onDelete }) => {
  const handleDelete = (item) => {
    onDelete(item);
  };

  const reorder = (todo, startIndex, endIndex) => {
    const copiedTodo = [...todo];
    const removed = copiedTodo.splice(startIndex, 1)[0];
    copiedTodo.splice(endIndex, 0, removed);

    return copiedTodo;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(todo, result.source.index, result.destination.index);

    setTodo(items);
  };

  return (
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
  );
};

export default Todo;
