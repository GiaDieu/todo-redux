import React, { Fragment } from "react";
import TodoItem from "./ToDoItem";

const TodoItems = ({ Todos, toggleTodo, removePreparation, deleteItem }) => {
  return (
    <Fragment>
      {Todos.map((Todo, index) => (
        <div className="todo-container" key={index}>
          <div className="todo-items">
            <TodoItem
              Todo={Todo}
              id={index}
              toggleTodo={() => toggleTodo(index)}
              onRemovePreparation={() => removePreparation(index)}
              deleteItem={() => deleteItem(index)}
            />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default TodoItems;
