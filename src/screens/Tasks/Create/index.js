import React from "react";
import "./index.css";

const TaskCreateForm = () => {
  return (
    <div className="container">
      <h2>Create New Task</h2>
      <form className="create__form">
        <div className="form_element">
          <label>Title: </label>
          <input type="text" placeholder="Title" />
        </div>
        <div className="form_element">
          <label>Description: </label>
          <input type="text" placeholder="Description" />
        </div>
        <div className="form_element">
          <label>Assign to: </label>
          <input type="text" placeholder="Assign to" />
        </div>
        <div className="form_submit">
          <button type="submit" className="submit__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskCreateForm;
