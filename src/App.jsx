import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [count, setCount] = useState(0);
  const calculator = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment(Number(count)));
    setCount(0);
  };
  const onDecrement = () => {
    dispatch(decrement(Number(count)));
    setCount(0);
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          onChange={(e) => setCount(e.target.value)}
          value={count}
          type={"number"}
        />{" "}
        만큼을 <button onClick={onIncrement}>더할게요</button>{" "}
        <button onClick={onDecrement}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{calculator}</p>
      </div>
    </div>
  );
}

export default App;
