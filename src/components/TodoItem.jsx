import React from "react";
// React Redux
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../store/slice/Todos";

const TodoItem = ({ todo }) => {
    const [editedTodo, setEditedTodo] = React.useState(todo.text);
    const [editable, setEditable] = React.useState(false);
    const dispatch = useDispatch();
    return (
        <div className="bg-slate-200 p-3 flex justify-between items-center">
            <p className="text-[14px] font-medium leading-normal w-2/3">
                <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                    readOnly={!editable}
                    className={`${editable ? "border-2 border-green-500 px-2" : ""} outline-none w-full bg-transparent`}
                />
            </p>
            <div className="w-2/6 flex justify-evenly">
                <button
                    className="bg-green-500 text-white text-[14px] font-bold p-2 rounded-lg"
                    onClick={() => {
                        if (editable) {
                            dispatch(editTodo({ id: todo.id, text: editedTodo }));
                            setEditable(false);
                        } else { setEditable((prev) => !prev) }
                    }}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white text-[14px] font-bold p-2 rounded-lg"
                    onClick={() => dispatch(removeTodo(todo.id))}
                >
                    X
                </button>
            </div>
        </div>
    )
}

export default TodoItem;