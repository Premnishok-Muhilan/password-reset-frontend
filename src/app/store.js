import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
import registerReducer from "../features/users/registerSlice";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        register: registerReducer
    }
});

export default store;