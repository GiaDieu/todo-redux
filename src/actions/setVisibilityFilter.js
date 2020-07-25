import { SET_FILTER } from "../actions";

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  };
};
