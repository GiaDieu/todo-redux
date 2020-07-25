import { connect } from "react-redux";
import TodoItems from "../components/TodoItems";
import {
  toggleTodo,
  removePreparation,
  deleteItem,
  VisibilityFilters,
} from "../actions";

const FilterList = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.isCompleted);

    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.isCompleted);

    default:
      return todos;
  }
};
const mapStateToProps = (state) => {
  const VisibleList = FilterList(state.Todos, state.visibilityFilters);
  return {
    Todos: VisibleList,
    toggleTodo: state.toggleTodo,
    removePreparation: state.removePreparation,
    deleteItem: state.deleteItem,
  };
};

export default connect(mapStateToProps, {
  toggleTodo,
  removePreparation,
  deleteItem,
})(TodoItems);
