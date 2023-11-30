import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        removeTodo: (state, action) => {
            state = state.filter((todo) => todo.id !== action.payload.id)
        }
    }
})

export const { addTodo, removeTodo } = userSlice.actions;

export default userSlice.reducer;