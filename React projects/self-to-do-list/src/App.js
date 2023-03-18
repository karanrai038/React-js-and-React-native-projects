import React from "react";
import { useState } from "react";
import { AddTodoAction } from "./TodoAction";
import { useDispatch, useSelector } from "react-redux";
import { RemoveToDoAction } from "./TodoAction";
function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };
  const removeHandler = (t) => {
    console.log(t);
    dispatch(RemoveToDoAction(t));
  };
  return (
    <div className="container">
      <h1 className="display-5 text-center">To Do list</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control rounded-0"
            rows={3}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
      <ul>
        {todos &&
          todos.map((x) => (
            <li key={x.id}>
              <span>{x.todo}</span>
              <button
                className="btn btn-danger"
                onClick={() => removeHandler(x)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
