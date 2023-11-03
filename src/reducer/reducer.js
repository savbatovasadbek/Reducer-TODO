import { TYPES_ACTIONS } from "./actions";

const add = (state, todo) => {
  state.todos.push(todo);
};

const deleteTodo = (state, id) => {
  state.todos = state.todos.filter((todo) => todo.id !== id);
};

const editTodo = (state, todo) => {
  state.todos = state.todos.map((t) =>
    t.id !== todo.id ? { ...t } : { ...t, ...todo }
  );
};

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES_ACTIONS.ADD:
      add(state, action.payload);
      break;

    case TYPES_ACTIONS.REMOVE:
      deleteTodo(state, action.payload);
      break;

    case TYPES_ACTIONS.EDIT:
      editTodo(state, action.payload);
      break;

    default:
      break;
  }

  return { ...state };
};
