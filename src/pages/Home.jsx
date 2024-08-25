import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import todoServices from "../services/todoServices";

const Home = () => {

  const [newTodo, setNewTodo] = useState('');
  const [status, setStatus] = useState(false);
  const todos = useLoaderData();
  const navigate = useNavigate();

  const handleAddTodo = async (e) => {
    e.preventDefault();
    
    // make a POST request to the server
    todoServices.postTodo({
      description: newTodo,
      status: status
    })
      .then(response => {
        alert('Todo added successfully');

        // clear the form
        setNewTodo('');
        setStatus(false);

        // reload the todos
        navigate('/');
      })
      .catch(error => {
        alert('Failed to add todo');
      });
  }

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

      <form onSubmit={handleAddTodo}>
        <input 
          type="text"
          placeholder="Add Todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>False</option>
          <option>True</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default Home;