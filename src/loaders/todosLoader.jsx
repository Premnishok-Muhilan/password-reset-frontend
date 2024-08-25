// Import the `todoServices` object from the `../services/todoServices` module.
// `todoServices` provides methods for making API requests related to todo items.
import todoServices from "../services/todoServices";

// Define an asynchronous function `todosLoader`.
// This function is responsible for loading todo data from the server.
const todosLoader = async () => {
    // Make a request to the server to fetch the list of todos using the `getTodos` method from `todoServices`.
    // This method sends a GET request to the `/todos` endpoint of the API.
    const response = await todoServices.getTodos();

    // Return the todos data from the response.
    // `response.data.todos` contains the list of todos retrieved from the server.
    // This data will be provided to the component or route that uses this loader.
    return response.data.todos;
}

// Export the `todosLoader` function as the default export from this module.
// This allows the `todosLoader` function to be imported and used in routing configurations.
export default todosLoader;
