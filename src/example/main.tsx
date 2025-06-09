// src/example/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import Example from "./example";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);

export default Example;
