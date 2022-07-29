import { useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Error from "./screens/Error";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { loggedInUser } = useSelector((state) => state.auth);

  return loggedInUser ? (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
