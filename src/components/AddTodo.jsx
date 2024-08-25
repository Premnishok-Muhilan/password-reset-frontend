// Import the `todoServices` object from the `../services/todoServices` module.
// `todoServices` provides methods for making API requests related to todo items.
import todoServices from "../services/todoServices";

// Import specific actions and selectors from the `todoSlice` module.
// These are used to interact with the Redux state and dispatch actions.
import { clearForm, selectIsEditing, selectIsEditingId, selectNewTodo, selectStatus, setNewTodo, setStatus } from "../features/todos/todoSlice";

// Import hooks from `react-redux` to connect React components to the Redux store.
// `useDispatch` is used to dispatch actions to the Redux store.
// `useSelector` is used to access the Redux state.
import { useDispatch, useSelector } from "react-redux";

// Import the `useNavigate` hook from `react-router-dom` for navigation.
// This hook is used to programmatically navigate to different routes.
import { useNavigate } from "react-router-dom";

// Define the `AddTodo` functional component.
// This component allows users to add or update todo items.
const AddTodo = () => {

    // Use `useSelector` to access the current value of `newTodo` from the Redux state.
    const newTodo = useSelector(selectNewTodo);

    // Use `useSelector` to access the current value of `status` from the Redux state.
    const status = useSelector(selectStatus);

    // Use `useNavigate` to get a navigate function for programmatic navigation.
    const navigate = useNavigate();

    // Use `useDispatch` to get the dispatch function for dispatching actions to the Redux store.
    const dispatch = useDispatch();
  
    // Use `useSelector` to access whether we are currently editing a todo.
    const isEditing = useSelector(selectIsEditing);

    // Use `useSelector` to access the ID of the todo being edited.
    const isEditingId = useSelector(selectIsEditingId);

    // Define an asynchronous function `handleAddTodo` to handle form submission.
    const handleAddTodo = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        
        if (!isEditing) {
            // If not editing, make a POST request to add a new todo.
            todoServices.postTodo({
                description: newTodo,
                status: status
            })
            .then(response => {
                // Display a success message if the request succeeds.
                alert('Todo added successfully');

                // Clear the form fields in the Redux state.
                dispatch(clearForm());

                // Navigate to the root path to reload the list of todos.
                navigate('/');
            })
            .catch(error => {
                // Display an error message if the request fails.
                alert('Failed to add todo');
            });
        } else {
            // If editing, make a PUT request to update the existing todo.
            todoServices.putTodo({
                description: newTodo,
                status: status
            }, isEditingId)
            .then(response => {
                // Display a success message if the request succeeds.
                alert('Todo updated successfully');

                // Clear the form fields in the Redux state.
                dispatch(clearForm());

                // Navigate to the root path to reload the list of todos.
                navigate('/');
            })
            .catch(error => {
                // Display an error message if the request fails.
                alert('Failed to update todo');
                console.log(error); // Log the error for debugging purposes.
            });
        }
    }

    return (
        // Render a form for adding or updating a todo item.
        <form onSubmit={handleAddTodo}>
            <input 
                type="text"
                placeholder="Add Todo..."
                value={newTodo} // Bind the input value to the `newTodo` state.
                onChange={(e) => dispatch(setNewTodo(e.target.value))} // Dispatch an action to update `newTodo` on input change.
            />
            <select
                value={status} // Bind the select value to the `status` state.
                onChange={(e) => dispatch(setStatus(e.target.value))} // Dispatch an action to update `status` on select change.
            >
                <option value="false">False</option>
                <option value="true">True</option>
            </select>
            <button type="submit">
                {/* Display a different button text depending on whether we are editing a todo. */}
                { isEditing ? 'Update Todo' : 'Add Todo' }
            </button>
        </form>
    )
}

// Export the `AddTodo` component as the default export from this module.
// This allows the `AddTodo` component to be imported and used in other parts of the application.
export default AddTodo;
