import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import TodoForm from "../components/TodoForm";

class AddToDo extends React.Component {
  state = { title: "" };

  onInputChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <Fragment>
        <TodoForm
          onChange={this.onInputChange}
          onSubmit={this.onHandleSubmit}
          title={this.state.title}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = (addTodo) => {
  return {
    addTodo: addTodo,
  };
};
export default connect(null, mapDispatchToProps(addTodo))(AddToDo);
