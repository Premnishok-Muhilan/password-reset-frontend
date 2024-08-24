import axios from "axios";

const todoLoader = async () => {
  //make a request to the server
  const response = await axios.get("http://localhost:3001/api/v1/todos");
  console.log(response.data);
  return response.data;
};

export default todoLoader;
