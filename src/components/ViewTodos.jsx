import { useLoaderData } from "react-router-dom";

const ViewTodos = () => {

    const todos = useLoaderData();

  return (
    <div>
        <h1>Todos</h1>
        <ul>
        {
            todos.map(todo => (
            <li key={todo._id}>
                {todo.description}
            </li>
            ))
        }
        </ul>
    </div>
  )
}

export default ViewTodos;