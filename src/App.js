import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/reducer/loginReducer";

function App() {
  const { count } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment By 10"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment By 10
        </button>
      </div>
    </div>
  );
}

export default App;
