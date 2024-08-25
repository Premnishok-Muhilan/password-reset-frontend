// Import the `todoServices` object from the `../services/todoServices` module.
// `todoServices` provides methods for making API requests related to todo items.
// These methods are used to interact with a backend server to create, update, or fetch todos.
import todoServices from "../services/todoServices";

// Import specific actions and selectors from the `todoSlice` module.
// `clearForm`, `setNewTodo`, `setStatus`, `setIsEditing`, and `setIsEditingId` are actions used to update the Redux state.
// `selectNewTodo`, `selectStatus`, `selectIsEditing`, and `selectIsEditingId` are selectors to access state values.
import {
  clearForm,
  selectIsEditing,
  selectIsEditingId,
  selectNewTodo,
  selectStatus,
  setNewTodo,
  setStatus,
} from "../features/todos/todoSlice";

// Import hooks from `react-redux` to connect React components to the Redux store.
// `useDispatch` is used to dispatch actions to the Redux store.
// `useSelector` is used to access the Redux state.
import { useDispatch, useSelector } from "react-redux";

// Import the `useNavigate` hook from `react-router-dom` for navigation.
// This hook is used to programmatically navigate to different routes in the application.
import { useNavigate } from "react-router-dom";

// Define the `AddTodo` functional component.
// This component provides a form for adding a new todo or updating an existing one.
const AddTodo = () => {
  // Use `useSelector` to access the current value of `newTodo` from the Redux state.
  // `newTodo` is a string representing the description of the todo item being added or edited.
  const newTodo = useSelector(selectNewTodo);

  // Use `useSelector` to access the current value of `status` from the Redux state.
  // `status` is a boolean indicating whether the todo is completed or not.
  const status = useSelector(selectStatus);

  // Use `useNavigate` to get the `navigate` function for programmatic navigation.
  // This function is used to navigate to different routes programmatically.
  const navigate = useNavigate();

  // Use `useDispatch` to get the `dispatch` function for dispatching actions to the Redux store.
  // This function is used to send actions to the Redux store to update the state.
  const dispatch = useDispatch();

  // Use `useSelector` to access whether we are currently editing a todo.
  // `isEditing` is a boolean indicating if we are in editing mode.
  const isEditing = useSelector(selectIsEditing);

  // Use `useSelector` to access the ID of the todo being edited.
  // `isEditingId` holds the ID of the todo item being edited.
  const isEditingId = useSelector(selectIsEditingId);

  // Define an asynchronous function `handleAddTodo` to handle form submission.
  // This function will make API requests to either add or update a todo item based on the `isEditing` state.
  const handleAddTodo = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior, which would reload the page.

    // Check if we are in editing mode.
    if (!isEditing) {
      // If not editing, make a POST request to add a new todo item.
      todoServices
        .postTodo({
          description: newTodo, // The description of the new todo.
          status: status, // The status of the new todo.
        })
        .then((response) => {
          // If the request succeeds, display a success message.
          alert("Todo added successfully");

          // Clear the form fields by dispatching the `clearForm` action.
          dispatch(clearForm());

          // Navigate to the root path to reload the list of todos.
          navigate("/");
        })
        .catch((error) => {
          // If the request fails, display an error message.
          alert("Failed to add todo");
        });
    } else {
      console.log(status);
      // If editing, make a PUT request to update the existing todo item.
      todoServices
        .putTodo(
          {
            description: newTodo, // The updated description of the todo.
            status: status, // The updated status of the todo.
          },
          isEditingId
        ) // The ID of the todo being edited.
        .then((response) => {
          // If the request succeeds, display a success message.
          alert("Todo updated successfully");

          // Clear the form fields by dispatching the `clearForm` action.
          dispatch(clearForm());

          // Navigate to the root path to reload the list of todos.
          navigate("/");
        })
        .catch((error) => {
          // If the request fails, display an error message and log the error for debugging.
          alert("Failed to update todo");
          console.log(error);
        });
    }
  };

  // Render the form for adding or updating a todo item.
  return (
    <form onSubmit={handleAddTodo}>
      {/* Input field for the todo description */}
      <input
        type="text"
        placeholder="Add Todo..."
        value={newTodo} // Bind the input value to the `newTodo` state.
        onChange={(e) => dispatch(setNewTodo(e.target.value))} // Dispatch `setNewTodo` action to update the `newTodo` value.
      />
      {/* Dropdown for selecting the status of the todo */}
      {/* <select
        value={status} // Bind the select value to the `status` state.
        onChange={(e) => dispatch(setStatus(e.target.value))} // Dispatch `setStatus` action to update the `status`.
      > */}
      <select
        value={status ? "true" : "false"} // Ensure `status` is a boolean
        onChange={(e) => dispatch(setStatus(e.target.value === "true"))} // Convert the string back to boolean
      >
        <option value="false">False</option>
        <option value="true">True</option>
      </select>
      {/* Submit button that displays different text based on whether we are editing a todo */}
      <button type="submit">{isEditing ? "Update Todo" : "Add Todo"}</button>
    </form>
  );
};

// Export the `AddTodo` component as the default export from this module.
// This allows the `AddTodo` component to be imported and used in other parts of the application.
export default AddTodo;
