import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducer/loginReducer";

function Dashboard() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is dashboard</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Dashboard;
