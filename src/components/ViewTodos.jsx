import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { setIsEditing, setIsEditingId, setNewTodo, setStatus } from "../features/todos/todoSlice";

const ViewTodos = () => {

    const todos = useLoaderData();
    const dispatch = useDispatch();

    const handleTodoClick = (todo) => {
        dispatch(setNewTodo(todo.description));
        dispatch(setStatus(todo.status));
        dispatch(setIsEditing(true));
        dispatch(setIsEditingId(todo._id));
    }

  return (
    <div>
        <h1>Todos</h1>
        <ul>
        {
            todos.map(todo => (
            <li key={todo._id}>
                <span onClick={() => handleTodoClick(todo)}>{todo.description}</span>
            </li>
            ))
        }
        </ul>
    </div>
  )
}

export default ViewTodos;