import React, { useState } from "react";
import "./index.css";
import { login } from "../../redux/reducer/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { users } = useSelector((state) => state.auth);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = users.find(
      (user) => user.username === username && user.password === password
    );
    if (payload) {
      dispatch(login(payload));
      navigate("/");
    } else {
      alert("Invalid credentials !!");
      navigate("/");
    }
  };
  return (
    <div className="login">
      <form className="login__form" onSubmit={(event) => handleSubmit(event)}>
        <h1>Task Management System</h1>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(event) => handleUsernameChange(event)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => handlePasswordChange(event)}
        />
        <button type="submit" className="submit__button">
          Login
        </button>
        <p>Username: test01 Password: test1234</p>
      </form>
    </div>
  );
};

export default Login;
