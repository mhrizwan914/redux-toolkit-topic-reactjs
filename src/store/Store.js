import { configureStore } from "@reduxjs/toolkit";
// Slice
import todos from "./slice/Todos";

const store = configureStore({
    reducer: todos
});

export default store;