import { useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";

function App() {
  const { loggedInUser } = useSelector((state) => state.auth);

  return <div>{loggedInUser ? <Dashboard /> : <Login />}</div>;
}

export default App;
