// Import hooks for data loading and navigation
import { useLoaderData, useNavigate } from "react-router-dom";

// Import the service to handle todo-related API requests
import todoServices from "../services/todoServices";

// Import actions and selectors from the todo slice of the Redux store
import {
  clearForm, // Action to clear the form fields
  selectNewTodo, // Selector to get the current value of the new todo from the Redux store
  selectStatus, // Selector to get the current status from the Redux store
  setNewTodo, // Action to update the new todo value in the Redux store
  setStatus, // Action to update the status value in the Redux store
} from "../features/todos/todoSlice";

// Import hooks for dispatching actions and accessing Redux state
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // Access the current new todo value from the Redux store
  const newTodo = useSelector(selectNewTodo);
  // Access the current status value from the Redux store
  const status = useSelector(selectStatus);
  // Load the todos data from the loader
  const todos = useLoaderData();
  // Get the navigate function to programmatically navigate
  const navigate = useNavigate();
  // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Handle form submission to add a new todo
  const handleAddTodo = async (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Make a POST request to add the new todo
    todoServices
      .postTodo({
        description: newTodo, // Pass the new todo description
        status: status, // Pass the current status
      })
      .then((response) => {
        // Notify user of successful addition
        alert("Todo added successfully");

        // Dispatch the clearForm action to reset the form in the Redux store
        dispatch(clearForm());

        // Navigate back to the home page to refresh the list of todos
        navigate("/");
      })
      .catch((error) => {
        // Notify user of an error
        alert("Failed to add todo");
      });
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          // Display each todo item with its description
          <li key={todo._id}>{todo.description}</li>
        ))}
      </ul>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={newTodo}
          // Update the new todo value in the Redux store on input change
          onChange={(e) => dispatch(setNewTodo(e.target.value))}
        />
        <select
          value={status}
          // Update the status in the Redux store on selection change
          onChange={(e) => dispatch(setStatus(e.target.value))}
        >
          <option value="False">False</option>
          <option value="True">True</option>
        </select>
        <button type="submit">Add Todo</button>
        {/* Button to submit the form and add the todo */}
      </form>
    </div>
  );
};

export default Home;
