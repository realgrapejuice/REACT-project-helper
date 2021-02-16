import React from "react";
import styles from "./todo.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Todo = ({ todo, setTodo, onDelete, onDragEnd }) => {
  const handleDelete = (item) => {
    onDelete(item);
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
