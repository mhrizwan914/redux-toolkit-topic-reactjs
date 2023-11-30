// React
import React from "react";
// Components
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
// React Redux
import { useSelector } from "react-redux";

const App = () => {
  const todos = useSelector(state => state.todos);
  React.useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos])
  return (
    <section>
      <div className="h-screen bg-slate-800">
        <div className="container">
          <TodoForm />
          <div className="w-1/2 m-auto p-5 bg-slate-300 mt-5 grid grid-cols-1 gap-3">
            {
              todos && todos.map((e) => (
                <TodoItem key={e.id} todo={e} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;