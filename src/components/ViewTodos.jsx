import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { setIsEditing, setIsEditingId, setNewTodo, setStatus } from "../features/todos/todoSlice";
import './ViewTodos.css';
import todoServices from "../services/todoServices";

const ViewTodos = () => {

    const todos = useLoaderData();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTodoClick = (todo) => {
        // dispatch(setNewTodo(todo.description));
        // dispatch(setStatus(todo.status));
        // dispatch(setIsEditing(true));
        // dispatch(setIsEditingId(todo._id));

        navigate(`/todos/${todo._id}`);
    }

    const handleCheck = (todo) => {
        const confirm = window.confirm('Are you sure you want to change the status of this todo?');
        if (confirm) {
            dispatch(setStatus(!todo.status));

            todoServices.putTodo({
                description: todo.description,
                status: !todo.status
            }, todo._id)
            .then(() => {
                alert('Todo updated');

                navigate('/', { replace: true });
            })
            .catch(err => {
                console.error(err);
            });
        }
    }

  return (
    <div>
        <h1>Todos</h1>
        <ul className="todoList">
        {
            todos
            .sort((a, b) => a.status - b.status)          
            .map(todo => (
                <li key={todo._id}>
                    <input type="checkbox" checked={todo.status} 
                        onChange={() => handleCheck(todo)}
                    />
                    <span onClick={() => handleTodoClick(todo)}
                        style={{ textDecoration: todo.status ? 'line-through' : 'none' }}
                    >{todo.description}</span>
            </li>
            ))
        }
        </ul>
    </div>
  )
}

export default ViewTodos;