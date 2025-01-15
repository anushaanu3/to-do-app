import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Printtodo from "./Printtodo";
const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    const newtodos = [...todos, task];
    setTodos(newtodos);
    setTask("");
  };
  const deleteHandler = (indexVal) => {
    const newTodos = todos.filter((todo, index) => index !== indexVal);
    setTodos(newTodos);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Todo Management App</h5>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="todo"
            value={task}
            onChange={changeHandler}
          />
          &nbsp;
          <input type="submit" name="add" value="Add" />
        </form>
        <Printtodo listto={todos} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
};
export default Todo;
