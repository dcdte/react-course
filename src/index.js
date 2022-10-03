import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");

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
    </>
  );
}

root.render(
  <>
    <Counter />
  </>
);
