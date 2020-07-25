import React, { Fragment } from "react";
import { VisibilityFilters } from "../actions";
import FilterLink from "../containers/FilterLink";

const Footer = () => {
  return (
    <Fragment>
      <div className="links">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </div>
    </Fragment>
  );
};

export default Footer;
