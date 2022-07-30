import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const TaskList = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="task__list__head">
        <h2>Task Items</h2>
        <button onClick={() => navigate("/create-task")}>Add Task</button>
      </div>
      <div className="data__table__box">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Assigned To</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coding</td>
              <td>Asraful</td>
              <td>29-07-2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
