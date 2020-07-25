import React from "react";
import AddToDo from "../containers/AddToDo";
import TodoList from "../containers/TodoList";
import Footer from "./Footer";
import Header from "../components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddToDo />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
