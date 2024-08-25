// Import the `useDispatch` hook from `react-redux`.
// This hook is used to access the Redux dispatch function, which allows dispatching actions to the Redux store.
import { useDispatch } from "react-redux";

// Import the `useLoaderData` hook from `react-router-dom`.
// This hook is used to access the data loaded by a route's loader function.
import { useLoaderData } from "react-router-dom";

// Import specific actions from the `todoSlice` module.
// These actions are used to update the Redux state for managing todos.
import { setIsEditing, setIsEditingId, setNewTodo, setStatus } from "../features/todos/todoSlice";

const ViewTodos = () => {
    // Use `useLoaderData` to access the todo data loaded by the route's loader function.
    // This data is expected to be an array of todo items.
    const todos = useLoaderData();
    
    // Use `useDispatch` to get the dispatch function for dispatching actions to the Redux store.
    const dispatch = useDispatch();

    // Define the `handleTodoClick` function to handle clicks on a todo item.
    // This function updates the Redux state with the details of the clicked todo.
    const handleTodoClick = (todo) => {
        // Dispatch actions to update the Redux state with the selected todo's details.
        dispatch(setNewTodo(todo.description)); // Set the new todo description.
        dispatch(setStatus(todo.status));       // Set the status of the todo.
        dispatch(setIsEditing(true));           // Indicate that a todo is being edited.
        dispatch(setIsEditingId(todo._id));     // Set the ID of the todo being edited.
    }

    return (
        <div>
            {/* Render a heading for the todo list */}
            <h1>Todos</h1>
            {/* Render a list of todo items */}
            <ul>
                {
                    // Map over the `todos` array and render each todo item as a list item.
                    todos.map(todo => (
                        <li key={todo._id}>
                            {/* Render the todo description as a clickable span */}
                            {/* When clicked, call `handleTodoClick` with the current todo item */}
                            <span onClick={() => handleTodoClick(todo)}>{todo.description}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

// Export the `ViewTodos` component as the default export from this module.
// This allows the `ViewTodos` component to be imported and used in other parts of the application.
export default ViewTodos;
