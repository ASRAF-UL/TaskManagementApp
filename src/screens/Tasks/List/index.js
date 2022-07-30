import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const TaskList = () => {
  const navigate = useNavigate();
  const { tasks } = useSelector((state) => state.task);
  console.log("Tasks: ", tasks);
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
              <th>Serial</th>
              <th>Title</th>
              <th>Assigned To</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {tasks ? (
              tasks.length ? (
                tasks.map((data, index) => (
                  <tr key={index}>
                    <td>{data ? data.id : null}</td>
                    <td>
                      <Link className="update__task" to="/update-task">
                        {data ? data.title : null}
                      </Link>
                    </td>
                    <td>
                      <span>
                        {data ? data.member && data.member.name : null}
                      </span>
                    </td>
                    <td>
                      <span>{data ? data.created_at : null}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
