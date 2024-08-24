import { useLoaderData } from "react-router-dom";

const Home = () => {

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

export default Home;