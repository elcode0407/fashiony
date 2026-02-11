import React from "react";
import ReactDOM from "react-dom/client";

function Test() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Frontend is running ✅</h1>
      <p>If you can see this, React rendering works.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);

