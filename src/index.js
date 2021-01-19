import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ShampooList from "./components/shampooList";

function App() {
  return (
    <div className="App">
      <ShampooList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
