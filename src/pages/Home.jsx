// Import the `AddTodo` component from the `../components/AddTodo` file.
// This component is responsible for handling the addition of new todo items.
import AddTodo from "../components/AddTodo";

// Import the `ViewTodos` component from the `../components/ViewTodos` file.
// This component is responsible for displaying the list of todo items.
import ViewTodos from "../components/ViewTodos";

// Define the `Home` functional component.
// This component serves as a container for displaying both `ViewTodos` and `AddTodo`.
const Home = () => {
  return (
    // Return JSX to render the component.
    // The `div` element wraps the child components `ViewTodos` and `AddTodo`.
    <div>
      {/* Render the `ViewTodos` component to display the list of todos */}
      <ViewTodos />
      {/* Render the `AddTodo` component to allow adding new todos */}
      <AddTodo />
    </div>
  )
}

// Export the `Home` component as the default export from this module.
// This allows the `Home` component to be imported and used in other parts of the application.
export default Home;
