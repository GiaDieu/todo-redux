import React, { Fragment } from "react";

const Link = ({ onClick, active, children }) => {
  return (
    <Fragment>
      <button
        onClick={onClick}
        className={`btn-link ${active ? "active" : ""} `}
      >
        {children}
      </button>
    </Fragment>
  );
};

export default Link;
