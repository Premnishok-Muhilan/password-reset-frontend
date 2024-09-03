import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h1>Todos</h1>
      <Outlet />
    </div>
  );
};

export default UserDashboard;
