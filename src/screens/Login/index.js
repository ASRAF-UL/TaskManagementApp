import React, { useState } from "react";
import "./index.css";
import { login } from "../../redux/reducer/loginReducer";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { users, loggedInUser } = useSelector((state) => state.auth);

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
      console.log("Logged in user: ", loggedInUser);
    } else {
      alert("Invalid credentials !!");
    }
  };
  return (
    <div className="login">
      <form className="login__form" onSubmit={(event) => handleSubmit(event)}>
        <h1>Login Here</h1>
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
      </form>
    </div>
  );
};

export default Login;
