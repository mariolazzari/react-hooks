import React, { useState, useEffect } from "react";

function App() {
  // compoent states
  const [activated, setActivated] = useState(false);
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ city: "", country: "" });

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  // input text
  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });

  // color
  const [color, setColor] = useState("black");
  const onColorChange = () => {
    setColor(color === "black" ? "salmon" : "black");
  };

  const text = activated ? "Active" : "Inactive";

  useEffect(() => {
    console.log("Inside useEffect: count ->", count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setActivated(!activated)}>{text}</button>

      <h3 style={{ color }}>Click: {count}</h3>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={onColorChange}>Color</button>

      <form>
        <div>
          <input
            type="text"
            name="city"
            placeholder="city..."
            value={state.city}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="country..."
            value={state.country}
            onChange={onChange}
          />
        </div>
        <div>You live in {`${state.city} ${state.country}`}</div>
      </form>
    </div>
  );
}

export default App;
