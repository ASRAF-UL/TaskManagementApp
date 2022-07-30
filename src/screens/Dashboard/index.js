import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducer/loginReducer";
import "./index.css";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome To Task Manager App</h1>
      <div className="title__button__div">
        <button
          className="task__title__button"
          onClick={() => navigate("/tasks")}
        >
          Tasks
        </button>
        <button
          className="member__title__button"
          onClick={() => navigate("/members")}
        >
          Members
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
