import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="button"
          unmountOnExit
        >
          <button onClick={decrement}>-</button>
        </CSSTransition>
        <CSSTransition
          in={count > 0}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <span>{count}</span>
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={300}
          classNames="button"
          unmountOnExit
        >
          <button onClick={increment}>+</button>
        </CSSTransition>
      </div>
      <CSSTransition in={true} timeout={300} classNames="button" unmountOnExit>
        <button onClick={reset}>reset</button>
      </CSSTransition>
    </div>
  );
}

export default App;
