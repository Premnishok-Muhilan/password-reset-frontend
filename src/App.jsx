import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import todosLoader from "./loaders/todosLoader";
import Todo from "./components/Todo";
import todoLoader from "./loaders/todoLoader";
import AddTodo from "./components/AddTodo";

// create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: todosLoader
  },
  {
    path: "/todos/:id",
    element: <Todo />,
    loader: todoLoader
  },
  {
    path: "/add-todo",
    element: <AddTodo />
  },
  {
    path: "/edit-todo/:id",
    element: <AddTodo />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;