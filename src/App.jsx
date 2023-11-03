import { useContext } from "react";
import { Todo } from "./components/card";
import AddTodo from "./components/forms/add-todo/addTodo";
import { Context } from "./store";

function App() {
  const { todos } = useContext(Context);

  return (
    <div className="bg-slate-200 min-h-screen p-4">
      <AddTodo />
      {todos.length ? (
        todos?.map((todo) => <Todo {...todo} key={todo.id} />)
      ) : (
        <h1 className="text-center text-red-600 text-2xl">No Todos !!!</h1>
      )}
    </div>
  );
}

export default App;
