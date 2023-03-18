export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i.todo === todo);

  if (!hasTodo && todo !== "") {
    dispatch({
      type: "AddTodo",
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};

export const RemoveToDoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  dispatch({
    type: "RemoveTodo",
    payload: todos.filter((x) => x.id !== todo.id),
  });
};
