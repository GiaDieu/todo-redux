import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_PREPARATION,
  DELETE_ITEM,
} from "./Types";

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    title,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const removePreparation = (id) => {
  return {
    type: REMOVE_PREPARATION,
    id,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};
