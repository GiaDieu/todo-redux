import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_PREPARATION,
  DELETE_ITEM,
} from "../actions";

const Todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { isCompleted: false, isRemoved: false, title: action.title },
      ];

    case TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      );

    case REMOVE_PREPARATION:
      return state.map((todo, index) =>
        index === action.id ? { ...todo, isRemoved: !todo.isRemoved } : todo
      );

    case DELETE_ITEM:
      return state.filter((todo) => !todo.isCompleted);
    default:
      return state;
  }
};

export default Todos;
