// React
import React from "react";
// React Redux
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slice/Todos";

const TodoForm = () => {
    const [todo, setTodo] = React.useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: Date.now(), text: todo }));
        setTodo("");
    }
    return (
        <div className="bg-slate-400 p-3 w-1/2 m-auto rounded-sm">
            <form className="flex gap-3" onSubmit={handleSubmit}>
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    placeholder="Enter your Todo's"
                    className="outline-none w-2/3 h-10 border-none px-2 block text-gray-400"
                />
                <button
                    type="submit"
                    className="w-2/6 block font-semibold bg-slate-700 h-10 text-white"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default TodoForm;