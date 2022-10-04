import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert(`El mensaje es ${mensaje}`);
        }}
      >
        Save
      </button>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </>
  );
}

root.render(
  <>
    <Counter />
  </>
);
