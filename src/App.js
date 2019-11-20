import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const count = useSelector(state => state.counter);
  const logged = useSelector(state => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <button onClick={() => dispatch(increment(5))}>Add +1</button>
      <button onClick={() => dispatch(decrement(10))}>Subtract -1</button>
      {logged ? <h3>You are loggedIn</h3> : <h3>You are loggedout</h3>}
    </div>
  );
}

export default App;
