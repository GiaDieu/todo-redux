import React, { Fragment } from "react";

const TodoForm = ({ onChange, onSubmit, title }) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit} className="form">
        <input type="text" value={title} onChange={(e) => onChange(e)} />
        <button className="btn-add">Add</button>
      </form>
    </Fragment>
  );
};

export default TodoForm;
