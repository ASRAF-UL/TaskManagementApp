import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./screens/Login";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Login />
  </Provider>
);
reportWebVitals();
