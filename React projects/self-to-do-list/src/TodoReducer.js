const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "AddTodo":
      return { todos: action.payload };

    case "RemoveTodo":
      return { todos: action.payload };
    default:
      return state;
  }
};
export default TodoReducer;
