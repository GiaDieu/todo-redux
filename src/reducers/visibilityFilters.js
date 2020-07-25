import { VisibilityFilters, SET_FILTER } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default visibilityFilter;
