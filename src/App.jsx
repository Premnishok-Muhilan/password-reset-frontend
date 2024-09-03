import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import todosLoader from "./loaders/todosLoader";
import Todo from "./components/Todo";
import todoLoader from "./loaders/todoLoader";
import AddTodo from "./components/AddTodo";
import UserDashboard from "./pages/UserDashboard";
import ViewTodos from "./components/ViewTodos";
import HomeNav from "./wrappers/HomeNav";
import Register from "./components/Register";
import Login from "./components/Login";

// create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <UserDashboard />,
    children: [
      {
        path: '',
        element: <ViewTodos />,
        loader: todosLoader
      },
      {
        path: "todos/:id",
        element: <Todo />,
        loader: todoLoader
      },
      {
        path: "add-todo",
        element: <AddTodo />
      },
      {
        path: "edit-todo/:id",
        element: <AddTodo />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;