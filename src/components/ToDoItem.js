import React from "react";

const TodoItem = ({
  Todo,
  id,
  toggleTodo,
  onRemovePreparation,
  deleteItem,
}) => {
  return (
    <div
      onAnimationEnd={deleteItem}
      className={`Todo ${
        Todo.isRemoved && Todo.isCompleted ? "AnimationRemove" : ""
      }`}
    >
      <div
        className={`todo-item ${
          Todo.isCompleted ? "Completed" : "UnCompleted"
        }`}
      >
        <span>{Todo.title}</span>
      </div>
      <div className="btn">
        <button className="check-btn" onClick={toggleTodo}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={onRemovePreparation}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
