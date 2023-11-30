import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [
            {
                id: 0,
                text: "Hello World"
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? action.payload : todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        }
    }
})

export const { addTodo, editTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;