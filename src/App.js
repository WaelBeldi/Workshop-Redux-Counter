import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./JS/actions/countActions";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <input
        type="number"
        value={num}
        name="num"
        onChange={(e) => setNum(e.target.value)}
      />
      <h4>{count}</h4>
      <div>
        <button onClick={() => dispatch(decrement(Number(num)))}>
          Decrement (-)
        </button>
        <button onClick={() => {dispatch(reset()); setNum(0)}}>Reset</button>
        <button onClick={() => dispatch(increment(Number(num)))}>
          Increment (+)
        </button>
      </div>
    </div>
  );
}

export default App;
