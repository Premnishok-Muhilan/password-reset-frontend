import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import todoLoader from "../loaders/todoLoader";

// create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: todoLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
