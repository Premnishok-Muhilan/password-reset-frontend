// Import the default export from the `./instance` module.
// This `instance` is typically an Axios instance or a similar HTTP client configured with default settings.
import instance from "./instance";

// Define an object `todoServices` that contains methods for interacting with a todo API.
// These methods use the imported `instance` to make HTTP requests.
const todoServices = {
  // Define an asynchronous method `getTodos` to fetch the list of todos from the API.
  // This method makes a GET request to the `/todos` endpoint and returns the response.
  getTodos: async () => {
    return await instance.get("/todos");
  },

  // Define an asynchronous method `postTodo` to create a new todo item.
  // This method takes `data` as an argument (the new todo item) and makes a POST request to the `/todos` endpoint.
  postTodo: async (data) => {
    return await instance.post("/todos", data);
  },

  // Define an asynchronous method `putTodo` to update an existing todo item.
  // This method takes `data` (the updated todo item) and `id` (the ID of the todo to update) as arguments.
  // It makes a PUT request to the `/todos/{id}` endpoint with the updated data.
  putTodo: async (data, id) => {
    return await instance.put(`/todos/${id}`, data);
  },
};

// Export the `todoServices` object as the default export from this module.
// This allows other parts of the application to import and use these API methods.
export default todoServices;
