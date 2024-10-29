import { useState } from "react";
import "./styles.scss";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <div className="counter-main-container">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <div className="counter-btn-container">
        <button onClick={handleIncrement}>+</button>
        {counter > 0 ? <button onClick={handleDecrement}>-</button> : NaN}
      </div>
    </div>
  );
};

export default Counter;
