// Import the `configureStore` function from `@reduxjs/toolkit`.
// This function is used to create and configure a Redux store with various settings and middleware.
import { configureStore } from "@reduxjs/toolkit";

// Import the `todoReducer` from the `../features/todos/todoSlice` module.
// This reducer is responsible for handling actions and updating the state related to todos.
import todoReducer from "../features/todos/todoSlice";

// Create the Redux store using `configureStore`.
// This store configuration includes the reducer and any additional settings or middleware.
const store = configureStore({
  // Define the reducers for the store.
  // In this case, we have a single reducer for managing the `todos` state.
  reducer: {
    todos: todoReducer,
  },
});

// Export the configured store as the default export from this module.
// This allows the store to be imported and used in the application, typically in the root component.
export default store;
