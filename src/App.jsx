// Import the `createBrowserRouter` and `RouterProvider` functions from `react-router-dom`.
// `createBrowserRouter` is used to create a router object for managing routes in a React application.
// `RouterProvider` is used to provide the router configuration to the React application.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import the `Home` component from the `./pages/Home` file.
// This component will be rendered for the root path of the application.
import Home from "./pages/Home";

// Import the `todosLoader` function from the `./loaders/todosLoader` file.
// This loader function is used to fetch data or perform actions before rendering the route.
import todosLoader from "./loaders/todosLoader";

// Create a router object using `createBrowserRouter`.
// This router configuration includes route definitions and associated components or loaders.
const router = createBrowserRouter([
  {
    // Define a route with the path "/".
    // This is the root path of the application.
    path: "/",

    // Specify the `Home` component as the element to render for this route.
    // This component will be displayed when the user navigates to the root path.
    element: <Home />,

    // Attach the `todosLoader` function to this route.
    // This loader function will be executed before the route is rendered, allowing data to be fetched or actions to be performed.
    loader: todosLoader,
  },
]);

// Define the `App` functional component.
// This component provides the router configuration to the React application using `RouterProvider`.
const App = () => {
  return <RouterProvider router={router} />;
};

// Export the `App` component as the default export from this module.
// This allows the `App` component to be imported and used as the main component of the application.
export default App;
