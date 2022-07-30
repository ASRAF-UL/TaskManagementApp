import { useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Error from "./screens/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { loggedInUser } = useSelector((state) => state.auth);

  return loggedInUser ? (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  ) : (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
