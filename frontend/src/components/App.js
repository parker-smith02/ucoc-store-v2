import React from "react";
import ReactDOM from "react-dom";
import topBg from "../images/topBg.jpg";

const App = () => {
  return (
    <div
      className="flex h-screen text-xl md:text-lg"
      style={{ backgroundImage: `url(${topBg})` }}
    >
      <p className="text-3xl">testing</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
